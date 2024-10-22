import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import Scan from "./pages/Scan.tsx";
import AddProduct from "./pages/AddProduct.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "scan",
        element: <Scan />,
      },
      {
        path: "add",
        element: <AddProduct />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <App /> */}
    <RouterProvider router={router} />
    {/* </Routes>
    </BrowserRouter> */}
  </StrictMode>
);
