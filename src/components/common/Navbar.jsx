import { getAuth, signOut } from "firebase/auth";
import { use, useState } from "react";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import app from "../../../config.firebase.js";
import Hamburger from "../../assets/icons/Hamburger.jsx";
import { AuthContext } from "./../../providers/AuthProvider.jsx";
import LoaderDotted from "./LoaderDotted.jsx";

const Navbar = () => {
  const [themeMode, setThemeMode] = useState("light");
  const { user, setUser, isLoading } = use(AuthContext);

  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setThemeMode(newTheme);
  };

  const navlinkStyle = ({ isActive }) => {
    return isActive
      ? "text-blue-600 font-bold underline underline-offset-6 pb-2 "
      : "";
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className={navlinkStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/groups" className={navlinkStyle}>
          All Groups
        </NavLink>
      </li>

      <li>
        <NavLink to="/about" className={navlinkStyle}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navlinkStyle}>
          Contact Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard" className={navlinkStyle}>
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  const handleLogout = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        toast.success("Logout successful");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <nav className="sticky top-0 z-50 bg-base-200">
      <div className="navbar bg-base-200 shadow-lg px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Hamburger />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn-ghost text-xl font-bold">
            Hobby<span className="text-amber-500">Hub</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <button onClick={toggleTheme} className="btn btn-square btn-circle">
            {themeMode === "light" ? (
              <MdOutlineDarkMode className="text-xl" />
            ) : (
              <MdLightMode className="text-xl" />
            )}
          </button>
          {isLoading ? (
            <LoaderDotted />
          ) : user ? (
            <>
              <Tooltip
                anchorId="user-tooltip"
                content={user.displayName}
                place="left"
                className="tooltip tooltip-left"
                classNameArrow="tooltip-arrow"
                style={{ backgroundColor: "black" }}
                delayShow={100}
                delayHide={100}
                effect="solid"
              />

              <Link id="user-tooltip" to="/" title={user.displayName}>
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 border-2 border-amber-500 rounded-full"
                />
              </Link>
              <button onClick={handleLogout} className="btn">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
