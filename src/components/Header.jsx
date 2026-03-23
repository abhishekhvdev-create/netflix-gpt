import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSlice = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, photoURL, displayName } = user;
        dispatch(addUser({ uid, email, photoURL, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe;
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div
      className="absolute top-0 left-0 w-full h-20 flex items-center px-8 
                    bg-linear-to-b from-black to-transparent z-10 justify-between"
    >
      <img className="h-8 md:h-10" src={NETFLIX_LOGO} alt="header_logo" />

      {userSlice && (
        <div>
          {/* <img
            className="relative right-10 top-5 h-8 md:h-10"
            src={userSlice?.photoURL}
            alt="profile_logo"
          /> */}

          <p
            className="font-bold cursor-pointer underline text-white px-2 bottom-8 py-2"
            onClick={handleSignout}
          >
            Signout
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
