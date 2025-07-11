import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./router/routes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
