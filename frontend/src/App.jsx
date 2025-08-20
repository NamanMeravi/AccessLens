import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import Loading from "./components/Loader/Loading";
import HomeDashboard from "./components/Dashboard/HomeDashboard";
import ProjectDashboard from "./components/Dashboard/ProjectDashboard";
import AccountDashboard from "./components/Dashboard/AccountDashboard";
const Start = lazy(() => import("./pages/Start"));
const Signup = lazy(() => import("./pages/Signup"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const Signin = lazy(() => import("./pages/Signin"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: Start,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      { path: "home", Component: HomeDashboard },
      {
        path: "project",
        children: [
          { index: true, element: <Navigate to="/dashboard/home" replace /> },
          { path: ":projectName", Component: ProjectDashboard },
        ],
      },
      { path: "account", Component: AccountDashboard },
    ],
  },
  {
    path: "/auth",
    children: [
      { path: "signup", Component: Signup },
      { path: "signin", Component: Signin },
      {
        path: "verify-email",
        element: <VerifyEmail />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
