import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Calender } from "./calender";
import { Home } from "./home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/calendario",
    element: <Calender />,
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
