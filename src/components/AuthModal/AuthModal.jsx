import {cn} from "../../global/utils.js";

export function AuthModal(props) {
    return (
        <div className={cn([
            'w-full h-min bg-black my-auto',
            'bg-background px-[10%] md:px-[20%] xl:px-[30%] py-8 flex flex-col justify-center'
        ])}>
            {props.children}
        </div>
    );
}