import {Input} from "@nextui-org/react";

export function MyInput(props) {
    return (
        <Input
            value={props.value}
            onChange={(e) => props.setValue(e.target.value)}
            radius={'none'}
            type={props.type}
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
            placeholder={props.label}
        />
    );
}
