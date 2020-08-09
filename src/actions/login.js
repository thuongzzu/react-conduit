import {
    LOADING_LOGIN,
    LOGIN_ERROR,
    AUTH_LOGIN,
    LOADING_USER,
    CURRENT_USER,
    USER_ERROR,
    LOGOUT,
} from "../constant/ActionTypes";

const action = (type, payload = {}) => {
    return { type, ...payload };
};

export const loadingLogin = (authentication) => {
    return action(
        LOADING_LOGIN,
        authentication
    );
};

export const authLogin = (username) => {
    return action(
        AUTH_LOGIN,
        { username }
    );
};

export const loginError = (error) => {
    return action(
        LOGIN_ERROR,
        error
    );
};

export const loadingUser = () => {
    return action(
        LOADING_USER
    );
};

export const currentUser = (username) => {
    return action(
        CURRENT_USER,
        { username }
    );
};

export const userError = (error) => {
    return action(
        USER_ERROR,
        error
    );
};

export const logout = () => {
    return {
        type: LOGOUT,
    }
}