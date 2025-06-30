// src/router.jsx
import { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import App from "./../App";
import LoaderBar from "./../components/common/LoaderBar";
import About from "./../pages/About";
import Dashboard from "./../pages/Dashboard";
import ErrorPage from "./../pages/ErrorPage";
import GroupsAll from "./../pages/GroupAll";
import GroupCreate from "./../pages/GroupCreate";
import GroupDetails from "./../pages/GroupDetails";
import GroupUpdate from "./../pages/GroupUpdate";
import Home from "./../pages/Home";
import Login from "./../pages/Login";
import Signup from "./../pages/Signup";
import PrivateRoute from "./../providers/PrivateRoute";
import { baseUrl } from "./../utils/utils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoaderBar />}>
            <Home />
          </Suspense>
        ),
        loader: () => fetch(`${baseUrl}/groups`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/groups",
        element: <GroupsAll />,
        loader: () => fetch(`${baseUrl}/groups`),
      },
      {
        path: "/group/create",
        element: (
          <PrivateRoute>
            <GroupCreate />
          </PrivateRoute>
        ),
      },
      {
        path: "/group/:id",
        element: <GroupDetails />,
        loader: ({ params }) => fetch(`${baseUrl}/group/id/${params.id}`),
      },
      {
        path: "/group/:id/edit",
        element: (
          <PrivateRoute>
            <GroupUpdate />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${baseUrl}/group/id/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/blogs/:slug",
        element: <BlogDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
