import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));

export const routerList = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
];
