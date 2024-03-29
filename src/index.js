import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Compose from "./Compose/Compose";
import Contact from "./Contact/Contact";
import Post from "./Posts/Post";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getPostById } from "./services/PostService";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globalStyles.css";

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
    loader: async ({ request, params }) => {
      return await getPostById(params.postId);
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="global">
    <Navbar />
    <NotificationContainer />
    <RouterProvider router={router} />
    <Footer />
  </div>
);
