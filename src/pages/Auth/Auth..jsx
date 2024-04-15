import {Card, CardBody} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

function Auth() {
    return (
        <Card
        radius={'none'}
        className={'flex flex-col m-auto h-max w-max px-[4rem] py-[1.5rem] gap-8 bg-blue-800'}
        >
            <CardBody>
                <h1 className={'text-[1.7rem] my-0'}>Вход, или регистрация</h1>
                <div className="flex flex-col w-full gap-4 my-6">
                    <Input
                        radius={'none'}
                        type="text"
                        size={'lg'}
                        startContent={'Логин'}
                        classNames={{
                            input: "text-[1.5rem] ml-4 ",
                            inputWrapper: "text-black font-bold text-[1.5rem]"
                        }}

                    />
                    <Input
                        radius={'none'}
                        type="password"
                        size={'lg'}
                        startContent={"Пароль"}
                        classNames={{
                            input: "text-[1.5rem] ml-4",
                            inputWrapper: "text-black font-bold text-[1.5rem]"
                        }}
                    />
                </div>
                <div className={"flex"}>
                    <Button
                        className={'font-bold text-[1.5rem] w-max px-8 py-6 bg-blue-400'}
                        color={'primary'}
                        radius={'none'}
                    >
                        Регистрация
                    </Button>
                    <Button
                        className={'font-bold text-[1.5rem] w-max px-8 py-6 ml-auto bg-blue-400'}
                        color={'primary'}
                        radius={'none'}
                    >
                        Вход
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default Auth;
