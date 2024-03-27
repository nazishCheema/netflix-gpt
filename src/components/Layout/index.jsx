import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../Login";

import Browse from "../Browse";

const Layout = () => {
  const appRouter = createBrowserRouter([
    { path: `/`, element: <Login /> },
    { path: `/browse`, element: <Browse /> },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Layout;
