import { IAnimal } from "../pages/Animal/Animal";

export const myAnimals: IAnimal[] = [];

export async function logJSONData() {
  const response = await fetch("https://animals.azurewebsites.net/api/animals");
  const jsonData = await response.json();

  for (let i = 0; i < jsonData.length; i++) {
    myAnimals.push(jsonData[i]);
  }
}

export interface Loader {
  allTheAnimals: IAnimal[];
}

export const animalLoader = () => {
  const data: Loader = { allTheAnimals: myAnimals };
  return data;
};

console.log(myAnimals);
