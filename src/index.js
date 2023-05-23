import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Compose from "./Compose/Compose";
import Contact from "./Contact/Contact";
import Post from "./Posts/Post";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/compose",
    element: <Compose />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/post/:postId",
    element: <Post />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
