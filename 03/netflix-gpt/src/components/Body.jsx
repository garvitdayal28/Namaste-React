import React from 'react'
import Login from './login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {

    const appRouter = createBrowserRouter([
        {path: "/",
        element: <Login />},
        {path: "/Browse",
        element: <Browse />},
    ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
