import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function logJSONData() {
  const response = await fetch("https://animals.azurewebsites.net/api/animals");
  const jsonData = await response.json();
  console.log(jsonData);
}

logJSONData();

export interface IAnimal {
  id: number;
  imageUrl: string;
  isFed: boolean;
  lastFed: string;
  latinName: string;
  longDescription: string;
  medicine: string;
  name: string;
  shortDescription: string;
  yearOfBirth: number;
}
