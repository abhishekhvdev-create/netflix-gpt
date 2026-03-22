import React, { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [message, setMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleAuthentication = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleFormSubmit = () => {
    const message = validate(email.current.value, password.current.value);
    setMessage(message);
    if (message) return;

    if (!isLoggedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://upload.wikimedia.org/wikipedia/commons/2/25/Rahul_Dravid_in_PMO_New_Delhi.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setMessage(error.message);
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="absolute h-full w-full object-cover">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg"
          alt="netflix background image"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="bg-black bg-opacity-80 p-10 rounded-lg w-96 flex flex-col gap-4"
          >
            <h1 className="text-white text-3xl font-bold mb-4">
              {" "}
              {isLoggedIn ? "Sign In" : "Sign up"}
            </h1>

            <input
              type="text"
              placeholder="Email"
              ref={email}
              className="p-3 rounded bg-gray-800 text-white outline-none"
            />

            {!isLoggedIn && (
              <input
                type="text"
                ref={name}
                placeholder="Fullname"
                className="p-3 rounded bg-gray-800 text-white outline-none"
              />
            )}

            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="p-3 rounded bg-gray-800 text-white outline-none"
            />

            <p className="text-red-800 font-bold text-1xl py-2">{message}</p>

            <button
              onClick={handleFormSubmit}
              className="bg-red-600 hover:bg-red-700 text-white py-3 cursor-pointer rounded font-semibold"
            >
              {isLoggedIn ? "Sign In" : "Sign Up"}
            </button>
            {isLoggedIn && (
              <p className="py-4 text-1xl text-white">
                New to NetFlix?{" "}
                <a href="#" onClick={handleAuthentication}>
                  Click here to Sign Up
                </a>
              </p>
            )}
            {!isLoggedIn && (
              <p className="py-4 text-1xl text-white">
                Already Registered?{" "}
                <a href="#" onClick={handleAuthentication}>
                  Click here to Sign In
                </a>
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
