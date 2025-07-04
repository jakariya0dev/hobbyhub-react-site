import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import router from "./routes/router.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
