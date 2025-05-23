import { Outlet, useNavigation } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "./components/common/Footer.jsx";
import LoaderBar from "./components/common/LoaderBar.jsx";
import Navbar from "./components/common/Navbar.jsx";

function App() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <>
      <Navbar />
      {isNavigating && <LoaderBar />}
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
