import {cn} from "../../global/utils.js";
import {Button, Input} from "@nextui-org/react";
import {useState} from "react";
import {LoginClient, RegisterClient} from "../../services/services.js";
import {setAccessToken, setUserID, setUserLogin} from "../../services/utils.js";
import {useNavigate} from "react-router-dom";

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
        <main className={cn([
            'fixed top-0 left-0 w-full h-full bg-black/50 flex'
        ])}>
            <div className={cn([
                'w-full h-min bg-black my-auto',
                'bg-background px-[10%] md:px-[20%] xl:px-[30%] py-8 flex flex-col justify-center'
            ])}>
                <h1 className={'text-[2.5rem] font-light'}>Регистрация и вход</h1>
                <form className={'flex flex-col gap-8 mt-4'}>
                    <Input
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        radius={'none'}
                        classNames={{
                            label: "text-black/50",
                            input: [
                                "text-black/90",
                                "placeholder:text-default-700/50",
                                "text-2xl",
                            ],
                            inputWrapper: [
                                "!cursor-text",
                                "h-[3.5rem]"
                            ],
                        }}
                        placeholder="логин"
                    />
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={'password'}
                        radius={'none'}
                        classNames={{
                            label: "text-black/50",
                            input: [
                                "text-black/90",
                                "placeholder:text-default-700/50",
                                "text-2xl",
                            ],
                            inputWrapper: [
                                "!cursor-text",
                                "h-[3.5rem]"
                            ],
                        }}
                        placeholder="пароль"
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
            </div>
        </main>
    );
}

export default Auth;
