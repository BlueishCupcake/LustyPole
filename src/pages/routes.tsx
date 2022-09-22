import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./home";
import { Register } from "./register";
import { Calender } from "./calender";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/matriculas",
    element: <Register />,
  },
  {
    path: "/calendario",
    element: <Calender />,
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
