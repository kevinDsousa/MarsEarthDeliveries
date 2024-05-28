import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AddressCreate } from "./pages/AddressCreate.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { AddressEdit } from "./pages/AddressEdit.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/new-address",
        element: <AddressCreate />,
      },
      {
        path: "edit-address",
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
