import {Button} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";

export default function Error() {
    const navigate = useNavigate();

    const onToHome = () => {
        navigate('/', {replace: true});
    }

    return (
        <div>
            <h1>Ошибка</h1>
            <Button color={'primary'} onClick={onToHome}>На главную</Button>
        </div>
    );
}
