import { lazy } from "react";

export const publicRoutes = [
  {
    path: "/login",
    exact: true,
    element: lazy(() => import("./pages/auth/Login.jsx")),
  },
  // {
  //   path: "/forgot-password",
  //   exact: true,
  //   element: lazy(() => import("./pages/auth/ForgotPassword.jsx")),
  // },
  // {
  //   path: "/reset-password",
  //   exact: true,
  //   element: lazy(() => import("./pages/auth/ResetPassword.jsx")),
  // },
];

export const protectedRoutes = [
  {
    path: "/",
    exact: true,
    element: lazy(() => import("./pages/index.jsx")),
  },
  {
    path: "/campaigns",
    exact: true,
    element: lazy(() => import("./pages/campaigns")),
  },
  {
    path: "/campaigns/create",
    exact: true,
    element: lazy(() => import("./pages/campaigns/campaign-form")),
  },
  {
    path: "/campaigns/:campaignId/edit",
    exact: true,
    element: lazy(() => import("./pages/campaigns/campaign-form")),
  },
  {
    path: "/users",
    exact: true,
    element: lazy(() => import("./pages/users")),
  },

  //users
];
