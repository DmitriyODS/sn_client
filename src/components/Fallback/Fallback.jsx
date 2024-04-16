import {Spinner} from "@nextui-org/react";

export function Fallback() {
    return (<div className={'w-full h-full flex'}>
        <Spinner className={'m-auto'} label={'загрузка'} color={'current'} size={'lg'}/>
    </div>);
}
