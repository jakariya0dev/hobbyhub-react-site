import { getAuth, signOut } from "firebase/auth";
import { use } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import app from "../../../config.firebase.js";
import Hamburger from "../../assets/icons/Hamburger.jsx";
import { AuthContext } from "./../../providers/AuthProvider.jsx";
import LoaderDotted from "./LoaderDotted.jsx";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to="/about" className="hover:text-blue-600">
          About Us
        </Link>
      </li>
      <li>
        <Link to="/groups" className="hover:text-blue-600">
          All Groups
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className="hover:text-blue-600">
          My Groups
        </Link>
      </li>
      <li>
        <NavLink to="/group/create" className="hover:text-blue-600">
          Create Group
        </NavLink>
      </li>
    </>
  );

  const { user, setUser, isLoading } = use(AuthContext);

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
    <nav className="sticky top-0 z-50 bg-base-100 px-4">
      <div className="navbar bg-base-100 shadow-sm">
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
        <div className="navbar-end">
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
