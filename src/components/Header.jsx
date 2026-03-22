import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

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
                    bg-gradient-to-b from-black to-transparent z-10 justify-between"
    >
      <img
        className="h-8 md:h-10"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="header_logo"
      />

      {userSlice && (
        <div>
          <img
            className="relative right-10 top-5 h-8 md:h-10"
            src={userSlice?.photoURL}
            alt="profile_logo"
          />

          <p
            className="font-bold cursor-pointer underline text-white px-2 relative bottom-8 py-5"
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
