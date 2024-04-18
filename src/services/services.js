import {getAccessToken, getUserID} from "./utils.js";
import {Config} from "../global/config.js";

const base_url = `http://${Config.SRV_URL}:${Config.SRV_PORT}/api/v1`

export async function LoginClient(login, password) {
    console.log(base_url);

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
        const resp = await fetch(`${base_url}/auth/login`, requestOptions);
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
        const resp = await fetch(`${base_url}/auth/reg`, requestOptions);
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
        const resp = await fetch(`${base_url}/posts?user_id=${getUserID().toString()}`, requestOptions);
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
        const resp = await fetch(`${base_url}/likes`, requestOptions);
        return await resp.json();
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

export async function AddPost(title, text) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", getAccessToken());

    const raw = JSON.stringify({
        "title": title,
        "text": text,
        "user_id": getUserID()
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const resp = await fetch(`${base_url}/posts`, requestOptions);
        return await resp.json();
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

export async function EditPost(id, title, text) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", getAccessToken());

    const raw = JSON.stringify({
        "title": title,
        "text": text,
        "id": id
    });

    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const resp = await fetch(`${base_url}/posts`, requestOptions);
        return await resp.json();
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

export async function DeletePost(id) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", getAccessToken());

    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const resp = await fetch(`${base_url}/posts/${id.toString()}`, requestOptions);
        return await resp.json();
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

