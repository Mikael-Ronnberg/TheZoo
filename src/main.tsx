import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { BunchOfAnimals } from "./pages/BunchOfAnimals/BunchOfAnimals";
import { AnimalView } from "./pages/AnimalView/AnimalView";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { animalLoader } from "./loaders/animalLoader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/animals",
    element: <BunchOfAnimals />,
    loader: animalLoader,
  },
  {
    path: "/animals/:id",
    element: <AnimalView></AnimalView>,
    loader: animalLoader,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
