import {NextUIProvider} from "@nextui-org/react";
import {TopBar} from "./components/TopBar/TopBar.jsx";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {isAuth} from "./services/utils.js";

function App() {
    const curLocation = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth() && curLocation.pathname !== '/auth') {
            navigate('/auth', {replace: true});
        } else if (isAuth() && curLocation.pathname === '/auth') {
            navigate('/home', {replace: true});
        } else if (curLocation.pathname === '/') {
            navigate('/home', {replace: true});
        }
    }, [curLocation, navigate]);

    return (
        <NextUIProvider>
            <div className={'root-container root-container-mobile lg:root-container-desktop'}>
                <TopBar/>
                <Outlet/>
            </div>
        </NextUIProvider>
    )
}

export default App;
