import {toNumber} from "../global/utils.js";

const ACCESS_TOKEN = 'access_token_key';
const USER_ID = 'user_id';
const USER_LOGIN = 'login';

export const isAuth = () => {
    const access_token = localStorage.getItem(ACCESS_TOKEN);
    return !!access_token;
}

export const getAccessToken = () => {
    const access_token = localStorage.getItem(ACCESS_TOKEN);
    return access_token ?? '';
}

export const getUserID = () => {
    const user_id = localStorage.getItem(USER_ID) ?? '0';
    return toNumber(user_id)
}

export const getUserLogin = () => {
    return localStorage.getItem(USER_LOGIN) ?? '';
}

export const clearAuthData = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(USER_LOGIN);
}

export const setAccessToken = (token) => {
    localStorage.setItem(ACCESS_TOKEN, token);
}

export const setUserID = (user_id) => {
    localStorage.setItem(USER_ID, user_id);
}

export const setUserLogin = (login) => {
    localStorage.setItem(USER_LOGIN, login);
}
