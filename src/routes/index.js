import { lazy } from "react";

export const routerList = [
  {
    path: "/",
    name: "Home",
    element: lazy(() => import("../pages/Home")),
  },
  {
    path: "/about-us",
    name: "About",
    element: lazy(() => import("../pages/AboutUs")),
  },
  {
    path: "/products/water-treatment",
    name: "Products",
    element: lazy(() => import("../pages/WaterTreatment")),
  },
  {
    path: "/products/cosmetic",
    name: "Products",
    element: lazy(() => import("../pages/Cosmetic")),
  },
];
