import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: '/login',
                element: <Login/>,
            }
        ]
    }
])
createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>,
)
