import {Button, Popover, PopoverContent, PopoverTrigger} from "@nextui-org/react";
import {AddIcon} from "../Icons/AddIcon.jsx";
import {clearAuthData, getUserLogin, isAuth} from "../../services/utils.js";
import {useNavigate} from "react-router-dom";

export function TopBar() {
    const navigate = useNavigate();

    const onLogout = () => {
        clearAuthData();
        navigate("/auth", {replace: true});
    }

    return (
        <header className={'flex gap-8 items-center w-full'}>
            <p className={'font-light text-[3.5rem]'}>
                Моя сеть
            </p>
            <Button
                className={'w-[3.5rem] h-[3.5rem]'}
                variant={'bordered'}
                radius={'full'}
                isIconOnly
            >
                <AddIcon/>
            </Button>
            {
                isAuth() && (
                    <Popover placement="bottom" showArrow={true}>
                        <PopoverTrigger>
                            <Button
                                className={'text-2xl px-8 py-8 ml-auto'}
                                color={'primary'}
                            >
                                {getUserLogin()}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <Button
                                className={'text-2xl m-4'}
                                color={'danger'}
                                variant={'shadow'}
                                onClick={onLogout}
                            >
                                Выход
                            </Button>
                        </PopoverContent>
                    </Popover>
                )
            }
        </header>
    );
}
