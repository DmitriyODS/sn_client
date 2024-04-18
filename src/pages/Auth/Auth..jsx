import {cn} from "../../global/utils.js";
import {Button, Input} from "@nextui-org/react";
import {useState} from "react";
import {LoginClient, RegisterClient} from "../../services/services.js";
import {setAccessToken, setUserID, setUserLogin} from "../../services/utils.js";
import {useNavigate} from "react-router-dom";
import {AuthModal} from "../../components/AuthModal/AuthModal.jsx";
import {MyInput} from "../../components/MyInput/MyInput.jsx";

function Auth() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onLogin = () => {
        if (!login || !password) {
            alert('Логин, или пароль - не могут быть пустыми!');
            return;
        }

        LoginClient(login, password).then(
            (respData) => {
                if (!respData.ok) {
                    alert("Такого пользователя не существует");
                } else {
                    setAccessToken(respData.data.access_token);
                    setUserID(respData.data.id);
                    setUserLogin(respData.data.login);
                    navigate("/home", {replace: true});
                }
            }
        );
    }

    const onReg = () => {
        if (!login || !password) {
            alert('Логин, или пароль - не могут быть пустыми!');
            return;
        }

        RegisterClient(login, password).then(
            (respData) => {
                if (!respData.ok) {
                    alert(respData.err);
                } else {
                    setAccessToken(respData.data.access_token);
                    setUserID(respData.data.id);
                    setUserLogin(respData.data.login);
                    navigate("/home", {replace: true});
                }
            }
        );
    }

    return (
        <main className={'fixed top-0 left-0 w-full h-full bg-black/50 flex'}>
            <AuthModal>
                <h1 className={'text-[2.5rem] font-light'}>Регистрация и вход</h1>
                <form className={'flex flex-col gap-8 mt-4'}>
                    <MyInput
                        value={login}
                        setValue={setLogin}
                        label={'логин'}
                    />
                    <MyInput
                        value={password}
                        setValue={setPassword}
                        label={'пароль'}
                        type={'password'}
                    />
                    <div className={'flex w-full gap-4 justify-end'}>
                        <Button
                            className={'text-2xl py-8 px-6'}
                            color={'primary'}
                            onClick={onReg}
                        >
                            Регистрация
                        </Button>
                        <Button
                            className={'text-2xl py-8 px-6'}
                            color={'primary'}
                            onClick={onLogin}
                        >
                            Вход
                        </Button>
                    </div>
                </form>
            </AuthModal>
        </main>
    );
}

export default Auth;
