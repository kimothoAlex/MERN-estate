import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/user";
import { useNavigate } from "react-router-dom";

const OAUTH = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log(`An error occured with google authentication ${error}`);
    }
  };

  return (
    <button
      type="button"
      onClick={handleChange}
      className="bg-red-700 text-white p-3 rounded-lg uppercase"
    >
      Continue with google
    </button>
  );
};

export default OAUTH;
