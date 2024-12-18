import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "../Home/Home";
import Register from "../Pages/Shared/Register/Register";
import SignIn from "../Pages/Shared/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route Not Found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
