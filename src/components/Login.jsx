import React from "react";
import Header from "./Header";

export const Login = () => {
  return (
    <>
      <Header />
      <div className="absolute h-full w-full object-cover">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg"
          alt="netflix background image"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <form className="bg-black bg-opacity-80 p-10 rounded-lg w-96 flex flex-col gap-4">
            <h1 className="text-white text-3xl font-bold mb-4">Sign In</h1>

            <input
              type="text"
              placeholder="Email or phone number"
              className="p-3 rounded bg-gray-800 text-white outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-gray-800 text-white outline-none"
            />

            <button className="bg-red-600 hover:bg-red-700 text-white py-3 cursor-pointer rounded font-semibold">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
