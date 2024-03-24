import React, { useState } from "react";
import Header from "../Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/ca77f965-b83c-4616-93a3-a2f8fabb378c/PK-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background"
        />
      </div>
      <form className="absolute p-12 bg-black text-white w-1/4 mx-auto my-36 right-0 left-0 rounded-md bg-opacity-80">
        <h1 className="font-bold text-3xl py-2">
          {isSignIn ? `Sign In` : `Sign Up`}
        </h1>
        {!isSignIn && (
          <input
            className="p-2 my-2 rounded-sm w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          type="email"
          placeholder="Enter your Email"
          className="p-2 my-2 rounded-sm w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 rounded-sm w-full bg-gray-700"
        />
        <button className="p-2 my-2 w-full bg-red-700 rounded-sm">
          {isSignIn ? `Sign In` : `Sign Up`}
        </button>
        <p
          className="cursor-pointer py-2"
          onClick={() => setIsSignIn(!isSignIn)}
        >
          {isSignIn
            ? `Not register yet? Sign up now `
            : `Already Register? Sign in now`}
        </p>
      </form>
    </div>
  );
};

export default Login;
