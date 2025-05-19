import { useState } from 'react'
import Navbar from "./components/common/Navbar.jsx";
import {Outlet} from "react-router";
import Footer from "./components/common/Footer.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default App
