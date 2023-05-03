import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { BunchOfAnimals } from "./pages/BunchOfAnimals/BunchOfAnimals";
import { AnimalView } from "./pages/AnimalView/AnimalView";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/animals",
    element: <BunchOfAnimals></BunchOfAnimals>,
    // loader: bookLoader,
  },
  {
    path: "/animals/:id",
    element: <AnimalView></AnimalView>,
    // loader: bookLoader,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// async function logJSONData() {
//   const response = await fetch("https://animals.azurewebsites.net/api/animals");
//   const jsonData = await response.json();
//   console.log(jsonData);
// }

// logJSONData();

// export interface IAnimal {
//   id: number;
//   imageUrl: string;
//   isFed: boolean;
//   lastFed: string;
//   latinName: string;
//   longDescription: string;
//   medicine: string;
//   name: string;
//   shortDescription: string;
//   yearOfBirth: number;
// }
