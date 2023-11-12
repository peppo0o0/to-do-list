import { createBrowserRouter } from "react-router-dom";

import Root from "../App";
import Register from "../pages/register";
import Login from "../pages/login";
import ErrorPage from "../error-page";
import PrivateRoute from "./privateroutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><Root /></PrivateRoute>,
    errorElement: <ErrorPage />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);
