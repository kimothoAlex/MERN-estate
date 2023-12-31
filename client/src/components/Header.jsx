import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl p-3 mx-auto">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
            <span className="text-slate-500">Alex</span>
            <span className="text-slate-800">Estate</span>
          </h1>
        </Link>
        <form className="flex items-center p-3 rounded-lg bg-slate-100">
          <input
            className=" bg-transparent focus:outline-none w-24 sm:w-64"
            type="text"
            placeholder="search..."
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-3 text-slate-700">
          <Link to={"/"}>
            <li className=" text-slate-700 hidden sm:inline hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className=" text-slate-700 hidden sm:inline hover:underline cursor-pointer">
              About
            </li>
          </Link>
          <Link to={"/profile"}>
            {currentUser ? (
              <img
                className="rounded-full w-7 h-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <li className=" text-slate-700 hover:underline cursor-pointer">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
