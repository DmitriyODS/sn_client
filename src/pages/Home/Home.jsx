import {useContext, useEffect, useState} from "react";
import {AddPost, DeletePost, EditPost, GetPosts, ToggleLike} from "../../services/services.js";
import {Button, Card, CardBody, CardFooter, CardHeader, Divider} from "@nextui-org/react";
import {HeartIcon} from "../../components/Icons/HeartIcon.jsx";
import {getUserID} from "../../services/utils.js";
import {cn} from "../../global/utils.js";
import {MyModal} from "../../components/MyModal/MyModal.jsx";
import {ModalContext} from "../../components/MyModal/ModelProvider.jsx";

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
                    <Card
                        className={"min-w-[32rem] w-[32rem] bg-primary p-4"}
                        key={key}
                        radius={'none'}
                    >
                        <CardHeader className={"flex gap-3"}>
                            <div className={"flex flex-col"}>
                                <p className="text-md text-2xl">{it.title}</p>
                                <p className="text-small text-gray-300">{it.user_name}</p>
                            </div>
                        </CardHeader>
                        <Divider/>
                        <CardBody>
                            <p className={'text-xl'}>{it.text}</p>
                        </CardBody>
                        <Divider/>
                        <CardFooter className={'flex'}>
                            <div className={'flex gap-4'}>
                                {
                                    it.user_id === getUserID() && (
                                        <>
                                            <Button
                                                radius={'none'}
                                                onPress={() => onDeletePost(it.id)}
                                            >
                                                Удалить
                                            </Button>
                                            <Button
                                                radius={'none'}
                                                onPress={() => onEditPost(it.id, it.title, it.text)}
                                            >
                                                Редактировать
                                            </Button>
                                        </>
                                    )
                                }
                            </div>
                            <Button
                                className={'ml-auto'}
                                radius={'none'}
                                onClick={() => onToggleLike(it.id)}
                            >
                                <HeartIcon className={cn(
                                    it.is_your_like && 'fill-red-500'
                                )}/>
                                <div className={'flex gap-1 font-bold'}>
                                    <p>Понравилось:</p>
                                    <p>{it.count_likes}</p>
                                </div>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default Home;
