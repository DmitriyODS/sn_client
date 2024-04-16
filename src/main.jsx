import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {Fallback} from "./components/Fallback/Fallback.jsx";
import {router} from "./Router.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Suspense fallback={<Fallback/>}>
            <RouterProvider router={router}/>
        </Suspense>
    </React.StrictMode>,
)
