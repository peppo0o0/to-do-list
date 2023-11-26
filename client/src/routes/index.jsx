import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Index";
import Register from "../pages/register";
import Login from "../pages/login";
import ErrorPage from "../error-page";
import PrivateRoute from "./privateroutes";
import Anonymous from "./anonymous";
// import AdminPage from "../pages/admin";
// import AdminRoute from "./adminroute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Root />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/admin",
  //   element: (
  //     <PrivateRoute>
  //         <AdminRoute>
  //           <AdminPage/>
  //         </AdminRoute>
  //     </PrivateRoute>
  //   ),
  // },
  {
    path: "register",
    element: (
      <Anonymous>
        <Register />
      </Anonymous>
    ),
  },
  {
    path: "login",
    element: (
      <Anonymous>
        <Login />
      </Anonymous>
    ),
  },
]);
