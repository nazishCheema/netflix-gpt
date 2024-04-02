import React, { useRef, useState } from "react";
import Header from "../Header";
import { inputValidation } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import auth from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/userSlice";
import { BACKGROUND_IMAGE, PHOTO_URL } from "../../constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(``);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleForm = () => {
    setLoading(true);
    const message = inputValidation(
      emailRef?.current?.value,
      passwordRef?.current?.value,
      nameRef?.current?.value,
      isSignIn
    );
    setErrorMessage(message);
    if (!errorMessage) {
      if (!isSignIn) {
        createUserWithEmailAndPassword(
          auth,
          emailRef?.current?.value,
          passwordRef?.current?.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
              displayName: nameRef?.current?.value,
              photoURL: PHOTO_URL,
            })
              .then(() => {
                const user = auth?.currentUser;
                dispatch(
                  addUser({
                    uId: user?.uid,
                    email: user?.email,
                    displayName: user?.displayName,
                    photoURL: user?.photoURL,
                  })
                );
                setLoading(false);
              })
              .catch((error) => {
                setErrorMessage(error);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
            setErrorMessage(errorCode + errorMsg);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          emailRef?.current?.value,
          passwordRef?.current?.value
        )
          .then(() => {
            setLoading(false);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
            setErrorMessage(errorCode + errorMsg);
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className="h-screen object-cover w-screen"
          src={BACKGROUND_IMAGE}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black text-white w-10/12 md:w-1/4 mx-auto my-28  right-0 left-0 rounded-md bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignIn ? `Sign In` : `Sign Up`}
        </h1>
        {!isSignIn && (
          <input
            className="p-2 my-2 rounded-sm w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
            ref={nameRef}
          />
        )}
        <input
          type="email"
          placeholder="Enter your Email"
          className="p-2 my-2 rounded-sm w-full bg-gray-700"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 rounded-sm w-full bg-gray-700"
          ref={passwordRef}
        />
        {errorMessage && (
          <p className="p-2 text-red-700 font-bold">{errorMessage}</p>
        )}
        <button
          onClick={handleForm}
          className="p-2 my-2 w-full bg-red-700 rounded-sm"
        >
          {loading ? `loading` : isSignIn ? `Sign In` : `Sign Up`}
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
