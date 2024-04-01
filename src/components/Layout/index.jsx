import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../Login";
import Browse from "../Browse";
import PlayMovie from "../PlayMovie";
import Error from "../Error";

const Layout = () => {
  const appRouter = createBrowserRouter([
    { path: `/`, element: <Login /> },
    { path: `/browse`, element: <Browse /> },
    { path: `browse/:movieId`, element: <PlayMovie /> },
    { path: `/error`, element: <Error /> },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Layout;
