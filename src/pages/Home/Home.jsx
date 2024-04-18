import {useContext, useEffect, useState} from "react";
import {AddPost, DeletePost, EditPost, GetPosts, ToggleLike} from "../../services/services.js";
import {getUserID} from "../../services/utils.js";
import {MyModal} from "../../components/MyModal/MyModal.jsx";
import {ModalContext} from "../../components/MyModal/ModelProvider.jsx";
import {MyCard} from "../../components/MyCard/MyCard.jsx";

function Home() {
    return (
        <div>Home</div>
    );
}

export default Home;
