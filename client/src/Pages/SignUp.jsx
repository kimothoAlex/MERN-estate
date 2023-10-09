import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign up</h1>
      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          className="border rounded-lg p-3"
          placeholder="username"
        />
        <input
          type="email"
          className="border rounded-lg p-3"
          placeholder="email"
        />
        <input
          type="password"
          className="border rounded-lg p-3"
          placeholder="password"
        />
        <button className=" bg-slate-700 text-white rounded-lg border p-3 hover:opacity-90 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an accout?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
