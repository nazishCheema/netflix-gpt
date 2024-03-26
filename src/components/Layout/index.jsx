import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../Login";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../Redux/userSlice";
import Browse from "../Browse";

const Layout = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    { path: `/`, element: <Login /> },
    { path: `/browse`, element: <Browse /> },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uId: user?.uid,
            email: user?.email,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  return <RouterProvider router={appRouter} />;
};

export default Layout;
