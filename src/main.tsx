import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AddressCreate } from "./pages/AddressCreate.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Home } from "./pages/Home.tsx";
import { AddressTable } from "./pages/AddressTable.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new-address",
        element: <AddressCreate />,
      },
      {
        path: "view-address",
        element: <AddressTable />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
