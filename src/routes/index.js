import { lazy } from "react";

export const routerList = [
  {
    path: "/",
    name: "Home",
    element: lazy(() => import("../pages/Home")),
  },
  {
    path: "/about-us",
    name: "About Us",
    element: lazy(() => import("../pages/AboutUs")),
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: lazy(() => import("../pages/ContactUs")),
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
  {
    path: "/products/food-beverages",
    name: "Products",
    element: lazy(() => import("../pages/FoodBeverage")),
  },
  {
    path: "/products/purifier-agent",
    name: "Products",
    element: lazy(() => import("../pages/PurifierAgent")),
  },
  {
    path: "/products/solvents",
    name: "Products",
    element: lazy(() => import("../pages/Solvent")),
  },
  {
    path: "/products/agro-chemical",
    name: "Products",
    element: lazy(() => import("../pages/AgroChemical")),
  },
  {
    path: "/products/contact-us",
    name: "Contact",
    element: lazy(() => import("../pages/ContactUs")),
  },
  {
    path: "/products/details",
    name: "Product",
    element: lazy(() => import("../pages/ProductDetail")),
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
    element: lazy(() => import("../pages/PrivacyPolicy")),
  },
];
