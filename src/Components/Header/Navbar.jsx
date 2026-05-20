import React, { useContext } from "react";
import logo from "../../assets/Logo/logo (1).png";
import Aside from "../Aside/Aside";
import { Link, NavLink } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import ThemeToggle from "../ThemeToggle";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const link = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/categories">Library</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact-Us</NavLink>
      {user ? "" : <NavLink to="/login">Login</NavLink>}
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("LogOut Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sticky top-0 z-50">
      <div className="drawer shadow-md">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            {/* Main Navbar */}
            <div className="flex  justify-between  w-full items-center">
              {/* Logo */}
              <div className="flex gap-5   ">
                <Link to="/" className="flex items-center">
                  <img className="lg:w-30 w-20" src={logo} alt="" />
                </Link>

                {/* <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered md:w-full w-full"
                  /> */}

                <SearchBar />
              </div>

              {/* Other */}
              <div>
                <div className="flex items-center gap-2">
                  <div className=" sm:flex gap-5 lg:text-xl md:text-lg mr-3 hidden">
                    {link}
                  </div>
                  <div className="dropdown dropdown-end ml-3 sm:ml-0">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src={
                            user
                              ? user.photoURL
                              : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          }
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex="-1"
                      className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-5 w-52 p-2 shadow space-y-2"
                    >
                      <li className="bg-base-300 p-1">
                        <a className="justify-between">
                          Profile
                          <span className="badge badge-accent text-white">
                            New
                          </span>
                        </a>
                      </li>
                      <li className="bg-base-300 p-1">
                        <a>Settings</a>
                      </li>
                      <li className="bg-base-300">
                        <ThemeToggle />
                      </li>
                      <li className=" mt-2">
                        <button
                          onClick={handleLogOut}
                          className="btn btn-accent text-white"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <Aside />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
