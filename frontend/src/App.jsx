import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

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
    path: "/dashboard/",
    element: <Dashboard />,
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
    <Suspense fallback={<div>Loading ...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
