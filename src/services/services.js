import {getAccessToken, getUserID} from "./utils.js";

export async function LoginClient(login, password) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "login": login,
        "password": password
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const resp = await fetch("http://127.0.0.1:8080/api/v1/auth/login", requestOptions);
        return await resp.json();
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

export async function RegisterClient(login, password) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "login": login,
        "password": password
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const resp = await fetch("http://127.0.0.1:8080/api/v1/auth/reg", requestOptions);
        return await resp.json();
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

export async function GetPosts() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", getAccessToken());

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const resp = await fetch(`http://127.0.0.1:8080/api/v1/posts?user_id=${getUserID().toString()}`, requestOptions);
        return await resp.json();
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

export async function ToggleLike(user_id, post_id) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", getAccessToken());

    const raw = JSON.stringify({
        "user_id": user_id,
        "post_id": post_id
    });

    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const resp = await fetch("http://127.0.0.1:8080/api/v1/likes", requestOptions);
        return await resp.json();
    } catch (error) {
        console.error('Ошибка:', error);
    }
}
