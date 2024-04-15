import {Button} from "@nextui-org/react";

function Home() {
    return (
        <div className={"flex flex-col p-8"}>
            <div className={"flex flex-row justify-start items-center gap-16"}>
                <h1 className={"text-[3rem]"}>MySocial</h1>
                <Button
                    className={'font-bold text-[1.5rem] w-max px-8 py-6 ring-foreground ring-inset leading-1'}
                    color={'default'}
                    variant={'bordered'}
                    radius={'full'}
                    startContent={"ICON"}
                >
                    Создать пост
                </Button>
                <div className={"flex flex-row bg-blue-400 ml-auto"}>
                    <p>ICON</p>
                    <p className={"text-[2rem]"}>login</p>
                </div>
            </div>
            <div className={"flex flex-row flex-wrap justify-center gap-4 my-8"}>
                <div className={'bg-blue-700 h-[15rem] w-[30rem] p-4 basis-auto'}>
                    <h1 className={"font-bold text-[1.2rem] leading-1"}>Заголовок нашего поста</h1>
                    <p className={"my-1"}>Какой-то очень хороший текст нашего поста, такой хороший, что даже пугает.
                        Почему пугает? - да кто же его знает? Просто пугает и всё. БУ</p>
                    <div>

                    </div>
                </div>
                <div className={'bg-blue-700 h-[15rem] w-[30rem] p-4 basis-auto'}>
                    <h1 className={"font-bold text-[1.2rem] leading-1"}>Заголовок нашего поста</h1>
                    <p className={"my-1"}>Какой-то очень хороший текст нашего поста, такой хороший, что даже пугает.
                        Почему пугает? - да кто же его знает? Просто пугает и всё. БУ</p>
                    <div>

                    </div>
                </div>
                <div className={'bg-blue-700 h-[15rem] w-[30rem] p-4 basis-auto'}>
                    <h1 className={"font-bold text-[1.2rem] leading-1"}>Заголовок нашего поста</h1>
                    <p className={"my-1"}>Какой-то очень хороший текст нашего поста, такой хороший, что даже пугает.
                        Почему пугает? - да кто же его знает? Просто пугает и всё. БУ</p>
                    <div>

                    </div>
                </div>
                <div className={'bg-blue-700 h-[15rem] w-[30rem] p-4 basis-auto'}>
                    <h1 className={"font-bold text-[1.2rem] leading-1"}>Заголовок нашего поста</h1>
                    <p className={"my-1"}>Какой-то очень хороший текст нашего поста, такой хороший, что даже пугает.
                        Почему пугает? - да кто же его знает? Просто пугает и всё. БУ</p>
                    <div>

                    </div>
                </div>
                <div className={'bg-blue-700 h-[15rem] w-[30rem] p-4 basis-auto'}>
                    <h1 className={"font-bold text-[1.2rem] leading-1"}>Заголовок нашего поста</h1>
                    <p className={"my-1"}>Какой-то очень хороший текст нашего поста, такой хороший, что даже пугает.
                        Почему пугает? - да кто же его знает? Просто пугает и всё. БУ</p>
                    <div>

                    </div>
                </div>
                <div className={'bg-blue-700 h-[15rem] w-[30rem] p-4 basis-auto'}>
                    <h1 className={"font-bold text-[1.2rem] leading-1"}>Заголовок нашего поста</h1>
                    <p className={"my-1"}>Какой-то очень хороший текст нашего поста, такой хороший, что даже пугает.
                        Почему пугает? - да кто же его знает? Просто пугает и всё. БУ</p>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;