import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from '../Login'


const Layout = () => {
  const appRouter=createBrowserRouter([
    {path:`/`,element:<Login/>},
  
  ])
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Layout