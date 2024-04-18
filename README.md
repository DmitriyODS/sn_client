# Шаги мастер класса

# Файл App.jsx

## Шаг 1
```jsx
<div className={'root-container root-container-mobile lg:root-container-desktop'}>
    <TopBar/>
    <Outlet/>
</div>
```

# Файл Auth.jsx

## Шаг 1

```jsx
<main className={'fixed top-0 left-0 w-full h-full bg-black/50 flex'}>

</main>
```

## Шаг 2

```jsx
<AuthModal>
    <h1 className={'text-[2.5rem] font-light'}>
        Регистрация и вход
    </h1>
</AuthModal>
```

## Шаг 3

```jsx
const [login, setLogin] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();
```

## Шаг 4

```jsx
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
</form>
```

## Шаг 5

```jsx
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
```

## Шаг 6

```jsx
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
```

## Шаг 7

```jsx
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
```

## Полный код файла

```jsx
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
```

# Home.jsx

## Шаг 1

```jsx
const [posts, setPosts] = useState([]);
const {onOpen, isOpen, onClose} = useContext(ModalContext);
const [curPost, setCurPost] = useState({});
```

## Шаг 2

```jsx
const onCloseModal = () => {
    setCurPost({});
    onClose();
}

const onEditPost = (id, title, text) => {
    setCurPost({
        id: id,
        title: title,
        text: text
    });
    onOpen();
}
```

## Шаг 3

```jsx
const onUpdateData = () => {
    GetPosts().then(
        (respData) => {
            if (!respData.ok) {
                alert(respData.err);
            } else {
                setPosts(respData.data);
            }
        }
    )
}

useEffect(() => {
    onUpdateData();
}, []);

const onToggleLike = (post_id) => {
    ToggleLike(getUserID(), post_id).then(
        () => {
            onUpdateData();
        }
    );
}
```

## Шаг 4

```jsx
const onSavePost = (id, title, text) => {
    if (!title) {
        alert("Заголовок не может быть пустым");
        return;
    }
    if (id > 0) {
        EditPost(id, title, text)
            .then(
                () => onUpdateData()
            )
            .catch(
                () => alert("Не удалось обновить пост")
            );
    } else {
        AddPost(title, text)
            .then(
                () => onUpdateData()
            )
            .catch(
                () => alert("Не удалось создать пост")
            );
    }
    onCloseModal();
}

const onDeletePost = (id) => {
    DeletePost(id)
        .then(
            () => onUpdateData()
        )
        .catch(
            () => alert("Не удалось удалить карточку")
        );
}
```

## Шаг 5

```jsx
return (
    <>
        <MyModal isOpen={isOpen} onSave={onSavePost} onClose={onCloseModal} post={curPost}/>
        <div className={'w-full h-full overflow-auto flex gap-4 flex-wrap items-start content-start'}>
            {posts.map((it, key) => (
                <MyCard
                    key={key}
                    onDeletePost={onDeletePost}
                    onEditPost={onEditPost}
                    onToggleLike={onToggleLike}
                    post={{
                        id: it.id,
                        user_id: it.user_id,
                        user_name: it.user_name,
                        title: it.title,
                        text: it.text,
                        count_likes: it.count_likes,
                        is_your_like: it.is_your_like,
                    }}
                />
            ))}
        </div>
    </>
);
```

## Полный код файла

```jsx
import {useContext, useEffect, useState} from "react";
import {AddPost, DeletePost, EditPost, GetPosts, ToggleLike} from "../../services/services.js";
import {getUserID} from "../../services/utils.js";
import {MyModal} from "../../components/MyModal/MyModal.jsx";
import {ModalContext} from "../../components/MyModal/ModelProvider.jsx";
import {MyCard} from "../../components/MyCard/MyCard.jsx";

function Home() {
    const [posts, setPosts] = useState([]);
    const {onOpen, isOpen, onClose} = useContext(ModalContext);
    const [curPost, setCurPost] = useState({});

    const onCloseModal = () => {
        setCurPost({});
        onClose();
    }

    const onEditPost = (id, title, text) => {
        setCurPost({
            id: id,
            title: title,
            text: text
        });
        onOpen();
    }

    const onUpdateData = () => {
        GetPosts().then(
            (respData) => {
                if (!respData.ok) {
                    alert(respData.err);
                } else {
                    setPosts(respData.data);
                }
            }
        )
    }

    useEffect(() => {
        onUpdateData();
    }, []);

    const onToggleLike = (post_id) => {
        ToggleLike(getUserID(), post_id).then(
            () => {
                onUpdateData();
            }
        );
    }

    const onSavePost = (id, title, text) => {
        if (!title) {
            alert("Заголовок не может быть пустым");
            return;
        }
        if (id > 0) {
            EditPost(id, title, text)
                .then(
                    () => onUpdateData()
                )
                .catch(
                    () => alert("Не удалось обновить пост")
                );
        } else {
            AddPost(title, text)
                .then(
                    () => onUpdateData()
                )
                .catch(
                    () => alert("Не удалось создать пост")
                );
        }
        onCloseModal();
    }

    const onDeletePost = (id) => {
        DeletePost(id)
            .then(
                () => onUpdateData()
            )
            .catch(
                () => alert("Не удалось удалить карточку")
            );
    }

    return (
        <>
            <MyModal isOpen={isOpen} onSave={onSavePost} onClose={onCloseModal} post={curPost}/>
            <div className={'w-full h-full overflow-auto flex gap-4 flex-wrap items-start content-start'}>
                {posts.map((it, key) => (
                    <MyCard
                        key={key}
                        onDeletePost={onDeletePost}
                        onEditPost={onEditPost}
                        onToggleLike={onToggleLike}
                        post={{
                            id: it.id,
                            user_id: it.user_id,
                            user_name: it.user_name,
                            title: it.title,
                            text: it.text,
                            count_likes: it.count_likes,
                            is_your_like: it.is_your_like,
                        }}
                    />
                ))}
            </div>
        </>
    );
}

export default Home;
```
