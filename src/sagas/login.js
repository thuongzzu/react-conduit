import { Login, fetchUser } from "../ultils/utilsAPI";
import LoginService from "../service/login-service";
import { authLogin, loginError, currentUser, userError, logout } from "../actions/login";
import {
    LOADING_LOGIN,
    LOADING_USER,
    LOGOUT
} from "../constant/ActionTypes";
import { put, call, takeLatest, take } from "redux-saga/effects";

const loginService = LoginService.getService();

function* loginHandle(authentication) {
    try {
        const { email, password } = authentication;
        const data = yield call(Login, email, password);
        console.log("saga", data);
        const { username, token } = data.user;

        //set Token
        loginService.setAccessToken(token);
        yield put(authLogin(username));
    } catch (error) {
        const { errors } = error.response.data;
        if (errors) {
            yield put(loginError({ errors: "Email or password is invalid" }));
        }
    }
}

function* userHandle() {
    try {
        const data = yield call(fetchUser);
        console.log("data saga", data);
        const { username } = data.user;
        yield put(currentUser(username));
    } catch (error) {
        yield put(userError({ errors: "Email or password is invalid !" }));
    }
}

function* logoutHandle() {
    loginService.cleanService();
    yield put(logout);
}

export default function* watchLogin() {
    yield takeLatest(LOADING_LOGIN, loginHandle);
    yield takeLatest(LOADING_USER, userHandle);
    yield take(LOGOUT, logoutHandle);
}