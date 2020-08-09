import {
    LOADING_LOGIN,
    AUTH_LOGIN,
    LOGIN_ERROR,
    LOGOUT,
    CURRENT_USER,
    USER_ERROR
} from "../constant/ActionTypes";
import LoginService from "../service/login-service";

const loginService = LoginService.getService();

const initState = {
    isLoading: false,
    isLogin: loginService.getAccessToken(),
    error: null,
    username: null,

};

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        //Login pending
        case LOADING_LOGIN: {
            return { ...state, isLoading: true, error: null };
        }

        //Login success
        case AUTH_LOGIN: {
            //console.log("action login", action);
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                error: null,
                username: action.username,

            };
        }

        //Login error
        case LOGIN_ERROR: {
            return {
                ...state,
                isLoading: false,
                isLogin: false,
                error: action.error,
                username: null,
            };
        }
        //Logout
        case LOGOUT: {
            return {
                ...state,
                isLoading: false,
                isLogin: false,
                error: null,
                username: null,
            };
        }
        //User pending
        case LOADING_LOGIN: {
            return { ...state, isLoading: true, error: null };
        }

        case CURRENT_USER: {
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                error: null,
                username: action.username,
                image: action.image,
            };
        }

        case USER_ERROR: {
            return {
                ...state,
                isLoading: false,
                isLogin: false,
                error: action.error,
                username: null,
            };
        }
        default:
            return state;
    }
};

export default loginReducer;