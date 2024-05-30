import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { AddressCreate } from "./pages/AddressCreate.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { Home } from "./pages/Home.tsx";
import { AddressView } from "./pages/AddressView.tsx";
import { AddressEdit } from "./pages/AddressEdit.tsx";

const router = createHashRouter([
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
        path: "/view-address",
        element: <AddressView />,
      },
      {
        path: "/edit-address/:id",
        element: <AddressEdit />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
