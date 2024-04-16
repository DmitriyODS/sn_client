import {createBrowserRouter} from "react-router-dom";
import {lazy} from "react";
import App from "./App.jsx";
import Error from "./pages/Error/Error.jsx";

// eslint-disable-next-line react-refresh/only-export-components
const HomePage = lazy(() => import('./pages/Home/Home.jsx'));
// eslint-disable-next-line react-refresh/only-export-components
const AuthPage = lazy(() => import('./pages/Auth/Auth..jsx'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: 'auth',
                element: <AuthPage/>,
            },
            {
                path: 'home',
                element: <HomePage/>,
            }
        ]
    }
]);
