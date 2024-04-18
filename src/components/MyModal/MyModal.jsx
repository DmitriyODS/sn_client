import {createPortal} from "react-dom";
import {cn} from "../../global/utils.js";
import {Button, Input} from "@nextui-org/react";
import {useEffect, useState} from "react";

export function MyModal(props) {
    const title = !!props.post?.id ? 'Редактировать пост' : 'Создать новый пост';
    const [titlePost, setTitlePost] = useState('');
    const [textPost, setTextPost] = useState('');
    const [postID, setPostID] = useState(0);

    useEffect(() => {
        setTitlePost(props.post?.title);
        setTextPost(props.post?.text);
        setPostID(props.post?.id);
    }, [props]);

    if (!props.isOpen) {
        return null;
    }

    const onSave = () => {
        props.onSave(postID, titlePost, textPost);
        setTextPost('');
        setTitlePost('');
        setPostID(0);
    }

    const onClose = () => {
        setTextPost('');
        setTitlePost('');
        setPostID(0);
        props.onClose();
    }

    return createPortal((
        <div
            className={'fixed top-0 left-0 bg-black/80 w-full h-full z-50 flex'}
        >
            <div className={cn([
                'w-full h-min bg-black my-auto',
                'bg-background px-[10%] md:px-[20%] xl:px-[30%] py-8 flex flex-col justify-center'
            ])}>
                <h1 className={'text-[2.5rem] font-light'}>{title}</h1>
                <form className={'flex flex-col gap-8 mt-4'}>
                    <Input
                        value={titlePost}
                        onChange={(e) => setTitlePost(e.target.value)}
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
                        placeholder="Заголовок поста"
                    />
                    <Input
                        value={textPost}
                        onChange={(e) => setTextPost(e.target.value)}
                        type={'text'}
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
                        placeholder="Текст поста"
                    />
                    <div className={'flex w-full gap-4 justify-end'}>
                        <Button
                            className={'text-2xl py-8 px-6'}
                            color={'primary'}
                            onPress={onClose}
                        >
                            Отмена
                        </Button>
                        <Button
                            className={'text-2xl py-8 px-6'}
                            color={'primary'}
                            onPress={onSave}
                        >
                            Сохранить
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    ), document.body);
}
