import axios from "axios";
import { IAnimal } from "../models/IAnimal";

let myAnimals: IAnimal[] = [];

if (myAnimals.length === 0) {
  try {
    const response = await axios.get<IAnimal[]>(
      "https://animals.azurewebsites.net/api/animals"
    );
    response.data.forEach((animal) => {
      myAnimals.push(animal);
    });
  } catch (error) {
    console.error(error);
  }
}

export interface Loader {
  theAnimals: IAnimal[];
  // updateLastFed: (animalId: number, lastFed: Date) => void;
  // isAnimalHungry: (hungryAnimal: IAnimal) => string | undefined;
}
// const updateLastFed = (animalId: number, didFed: Date) => {
//   const updatedAnimals = myAnimals.map((animal) => {
//     if (animal.id === animalId) {
//       let lastFed = didFed.toISOString();
//       return { ...animal, lastFed };
//     }
//     return animal;
//   });

//   myAnimals = updatedAnimals;
//   console.log(myAnimals);
// };

export const animalLoader = () => {
  const data: Loader = {
    theAnimals: myAnimals,
  };
  return data;
};
