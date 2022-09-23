import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./home";
import { Register } from "./register";
import { Calender } from "./calender";
import { Payment } from "./payment";

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
  {
    path: "/precos",
    element: <Payment />,
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
