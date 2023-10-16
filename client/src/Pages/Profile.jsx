import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4 ">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full w-24 h-24 self-center cursor-pointer"
        />
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="username "
          id="username"
        />
        <input
          type="email"
          className="border p-3 rounded-lg"
          placeholder="email"
          id="email"
        />
        <input
          type="password"
          className="border p-3 rounded-lg"
          placeholder="password"
          id="password"
        />
        <button className="bg-slate-800 p-3 rounded-lg text-white hover:opacity-95 disabled:opacity-70">
          Update Profile
        </button>
      </form>
      <div className="mt-5 flex justify-between">
        <span className="text-red-700">Delete Account</span>
        <span className="text-red-700">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;
