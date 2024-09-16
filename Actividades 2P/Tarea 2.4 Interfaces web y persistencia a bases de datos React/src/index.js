import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Home } from "./pages/home.jsx";
import ProtectedRoute from "./modules/session-service.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./modules/AuthProvider.jsx";
import RegisterForm from "./pages/register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
