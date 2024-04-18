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
