
import Navbar from "./components/common/Navbar.jsx";
import {Outlet} from "react-router";
import Footer from "./components/common/Footer.jsx";
import {ToastContainer} from "react-toastify";


function App() {

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
