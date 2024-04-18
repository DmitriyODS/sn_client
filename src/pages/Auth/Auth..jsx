import {Button, Input} from "@nextui-org/react";
import {useState} from "react";
import {LoginClient, RegisterClient} from "../../services/services.js";
import {setAccessToken, setUserID, setUserLogin} from "../../services/utils.js";
import {useNavigate} from "react-router-dom";
import {AuthModal} from "../../components/AuthModal/AuthModal.jsx";
import {MyInput} from "../../components/MyInput/MyInput.jsx";

function Auth() {
    return (
        <div>Auth</div>
    );
}

export default Auth;
