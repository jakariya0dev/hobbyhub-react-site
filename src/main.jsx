import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import "./index.css";
import Dashboard from "./pages/Dashboard.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import GroupsAll from "./pages/GroupAll.jsx";
import GroupCreate from "./pages/GroupCreate.jsx";
import GroupDetails from "./pages/GroupDetails.jsx";
import GroupUpdate from "./pages/GroupUpdate.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import PrivateRoute from "./providers/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("http://localhost:3000/groups"),
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
        loader: () => fetch("http://localhost:3000/groups"),
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
        loader: ({ params }) =>
          fetch(`http://localhost:3000/group/id/${params.id}`),
      },
      {
        path: "/group/:id/edit",
        element: (
          <PrivateRoute>
            <GroupUpdate />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/group/id/${params.id}`),
      },
      {},
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
