import {cn} from "../../global/utils.js";
import {Button} from "@nextui-org/react";
import {AddIcon} from "../Icons/AddIcon.jsx";

export function TopBar() {
    return (
        <header className={'flex gap-8 items-center'}>
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
        </header>
    );
}
