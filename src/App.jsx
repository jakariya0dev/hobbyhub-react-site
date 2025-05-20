import { useState } from 'react'
import Navbar from "./components/common/Navbar.jsx";
import {Outlet} from "react-router";
import Footer from "./components/common/Footer.jsx";
import {ToastContainer} from "react-toastify";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <ToastContainer />
    </>
  )
}

export default App
