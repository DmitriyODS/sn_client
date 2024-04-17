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

export async function LogoutClient(login, password) {

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