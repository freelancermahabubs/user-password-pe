import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AutProviders from "./AutProviders/AutProviders";
import PrivateRoute from "./components/PrivateRoute";
import Orders from "./components/Orders";
import Profile from "./components/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <AutProviders>
    <RouterProvider router={router} />
  </AutProviders>
);
