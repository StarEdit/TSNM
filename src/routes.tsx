import { createBrowserRouter } from "react-router-dom";
import CatchAllRoute from "@/pages/CatchAllRoute";
import Error from "@/pages/Error";
import MainLayout from "@/components/Layouts/MainLayout";

export const ROUTES = {
  HOME: "/",
  FORBIDDEN: "/403",
  NOT_FOUND: "/404",
  ALL_ROUTE: "*",

  // Auth
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  FORGOT_PASSWORD: "/forgot-password",
} as const;

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <div>Hello</div>,
      },
    ],
  },
  // Auth
  {
    path: ROUTES.SIGN_IN,
    element: "sign-in",
    errorElement: <Error />,
  },
  {
    path: ROUTES.SIGN_UP,
    element: "sign-up",
    errorElement: <Error />,
  },
  {
    path: ROUTES.FORGOT_PASSWORD,
    element: "forgot",
    errorElement: <Error />,
  },
  // Common
  {
    path: ROUTES.ALL_ROUTE,
    element: <CatchAllRoute />,
  },
]);
