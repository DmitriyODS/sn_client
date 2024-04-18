import {Button, Card, CardBody, CardFooter, CardHeader, Divider} from "@nextui-org/react";
import {getUserID} from "../../services/utils.js";
import {HeartIcon} from "../Icons/HeartIcon.jsx";
import {cn} from "../../global/utils.js";

export function MyCard(props) {
    return (
        <Card
            className={"min-w-[32rem] w-[32rem] bg-primary p-4"}
            radius={'none'}
        >
            <CardHeader className={"flex gap-3"}>
                <div className={"flex flex-col"}>
                    <p className="text-md text-2xl">{props.post.title}</p>
                    <p className="text-small text-gray-300">{props.post.user_name}</p>
                </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <p className={'text-xl'}>{props.post.text}</p>
            </CardBody>
            <Divider/>
            <CardFooter className={'flex'}>
                <div className={'flex gap-4'}>
                    {
                        props.post.user_id === getUserID() && (
                            <>
                                <Button
                                    radius={'none'}
                                    onPress={() => props.onDeletePost(props.post.id)}
                                >
                                    Удалить
                                </Button>
                                <Button
                                    radius={'none'}
                                    onPress={() => props.onEditPost(props.post.id, props.post.title, props.post.text)}
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
                    onClick={() => props.onToggleLike(props.post.id)}
                >
                    <HeartIcon className={cn(
                        props.post.is_your_like && 'fill-red-500'
                    )}/>
                    <div className={'flex gap-1 font-bold'}>
                        <p>Понравилось:</p>
                        <p>{props.post.count_likes}</p>
                    </div>
                </Button>
            </CardFooter>
        </Card>
    );
}
