import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FavouriteProvider } from "./components/FavouriteContext";
import { ThemeProvider } from "./components/ThemeContext";

import Template from "./Template";
import App from "./App";
import MovieDetails from "./MovieDetails";
import About from "./About";
import Favourite from "./Favourite";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      { index: true, element: <App /> },
      { path: "movie/:id", element: <MovieDetails /> },
      { path: "about", element: <About/>},
      { path: "favourite", element: <Favourite/>},
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <FavouriteProvider>
        <RouterProvider router={router} />
      </FavouriteProvider>
    </ThemeProvider>
  </React.StrictMode>
);
