import {NextUIProvider} from "@nextui-org/react";
import Auth from "./pages/Auth/Auth..jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
    return (
        <NextUIProvider>
            <Home/>
        </NextUIProvider>
    )
}

export default App;
