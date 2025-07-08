import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './router/routes'

const App = () => {
  
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App