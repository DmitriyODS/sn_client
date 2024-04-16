import {cn} from "../../global/utils.js";

function Auth() {
    return (
        <main className={cn([
            'fixed top-0 left-0 w-full h-full bg-black/50 flex'
        ])}>
            <div className={cn([
                'w-full h-[50%] bg-black my-auto',
                'bg-background px-[20%] py-4'
            ])}>
                <h1 className={'text-[3rem] font-light'}>Регистрация и вход</h1>
            </div>
        </main>
    );
}

export default Auth;
