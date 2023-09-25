import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="flex h-14 bg-black items-center justify-between p-4">
      <div className=" text-white flex text-2xl">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" width={45} height={20} loading="lazy" />
          <p>Chit Chat</p>
        </Link>
      </div>

      <div className=" flex gap-x-4 text-white text-lg">
        <Link to="/home">
          <p
            className={`${
              matchRoute("/home") ? "text-yellow-25" : "text-richblack-25"
            }`}
          >
            Home
          </p>
        </Link>
        <Link to="/chat">
          <p
            className={`${
              matchRoute("/chat") ? "text-yellow-25" : "text-richblack-25"
            }`}
          >
            Chat
          </p>
        </Link>
        <Link to="/about">
          <p
            className={`${
              matchRoute("/about") ? "text-yellow-25" : "text-richblack-25"
            }`}
          >
            About Us
          </p>
        </Link>
      </div>

      <div className="items-center gap-x-4 md:flex ">
        <Link to="/login">
          <button className="rounded-[8px] border border-white  px-[12px] py-[6px]  text-white">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="rounded-[8px] border border-white  px-[12px] py-[6px]  text-white">
            SignUp
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
