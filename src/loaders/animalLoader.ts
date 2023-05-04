import { useState } from "react";
import { IAnimal } from "../pages/Animal/Animal";

export let myAnimals: IAnimal[] = [];

export async function logJSONData() {
  if (myAnimals.length === 0) {
    const response = await fetch(
      "https://animals.azurewebsites.net/api/animals"
    );
    const jsonData = await response.json();

    for (let i = 0; i < jsonData.length; i++) {
      myAnimals.push(jsonData[i]);
    }
  }
}

export interface Loader {
  allTheAnimals: IAnimal[];
  updateLastFed: (animalId: number, lastFed: Date) => void;
}

const updateLastFed = (animalId: number, didFed: Date) => {
  const updatedAnimals = myAnimals.map((animal) => {
    if (animal.id === animalId) {
      let lastFed = didFed.toISOString();
      return { ...animal, lastFed, isFed: true };
    }
    return animal;
  });

  console.log(updatedAnimals);
  myAnimals = updatedAnimals; // Update the myAnimals array;
};

export const animalLoader = () => {
  const data: Loader = { allTheAnimals: myAnimals, updateLastFed };
  return data;
};

logJSONData();
