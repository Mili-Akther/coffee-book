import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import DashBoard from "../pages/DashBoard";
import CoffeeCards from "../CoffeeCards";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch("../coffees.json"),
          },
          {
            path: "/category/:category",
            element: <CoffeeCards></CoffeeCards>,
            loader: () => fetch("../coffees.json"),
          },
        ],
      },
      {
        path: "/Coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
    ],
  },
]);

export default routes;
