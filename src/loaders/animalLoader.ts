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
  isAnimalHungry: (hungryAnimal: IAnimal) => string;
}

const updateLastFed = (animalId: number, didFed: Date) => {
  const updatedAnimals = myAnimals.map((animal) => {
    if (animal.id === animalId) {
      let lastFed = didFed.toISOString();
      return { ...animal, lastFed, isFed: true };
    }
    return animal;
  });

  myAnimals = updatedAnimals;
};

const isAnimalHungry = (hungryAnimal: IAnimal) => {
  // hungryAnimals.map((animal) => {
  const now = new Date();
  const sinceFed = new Date(hungryAnimal.lastFed);
  const hoursSinceLastFed = Math.floor(
    (now.getTime() - sinceFed.getTime()) / (1000 * 60 * 60)
  );

  if (hoursSinceLastFed >= 3) {
    const updatedAnimals = myAnimals.map((animal) => {
      if (animal.id === hungryAnimal.id) {
        return { ...animal, isFed: false };
      }
    });
  }
  // });

  console.log(myAnimals);
  return hoursSinceLastFed.toString();
};

export const animalLoader = () => {
  const data: Loader = {
    allTheAnimals: myAnimals,
    updateLastFed,
    isAnimalHungry,
  };
  return data;
};

logJSONData();
