import { IAnimal } from "../pages/Animal/Animal";
import axios from "axios";

export const myAnimals: IAnimal[] = [];

if (myAnimals.length === 0) {
  try {
    const response = await axios.get<IAnimal[]>(
      "https://animals.azurewebsites.net/api/animals"
    );
    response.data.forEach((animal) => {
      myAnimals.push(animal);
    });
    console.log(myAnimals);
  } catch (error) {
    console.error(error);
  }
}

// const fetchAnimals = async () => {
//   try {
//     const response = await axios.get<IAnimal[]>(
//       "https://animals.azurewebsites.net/api/animals"
//     );
//     myAnimals = response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export interface Loader {
  theAnimals: IAnimal[];
  //   updateLastFed: (animalId: number, lastFed: Date) => void;
  //   isAnimalHungry: (hungryAnimal: IAnimal) => string | undefined;
}
// const updateLastFed = (animalId: number, didFed: Date) => {
//   const updatedAnimals = myAnimals.map((animal) => {
//     let lastFed = didFed.toISOString();
//     return { ...animal, lastFed, isFed: true };
//   });

//   myAnimals = updatedAnimals;
// };

// const isAnimalHungry = (hungryAnimal: IAnimal) => {
//   if (myAnimals !== undefined) {
//     const now = new Date();
//     const sinceFed = new Date(hungryAnimal.lastFed);
//     const hoursSinceLastFed = Math.floor(
//       (now.getTime() - sinceFed.getTime()) / (1000 * 60 * 60)
//     );

//     // if (hoursSinceLastFed >= 3) {
//     //   if (myAnimals !== undefined) {
//     //     const updatedAnimals = myAnimals.map((animal) => {
//     //       if (animal.id === hungryAnimal.id) {
//     //         return { ...animal, isFed: false };
//     //       }
//     //     });
//     //   }
//     // }
//     return hoursSinceLastFed.toString();
//   }
// };

export const animalLoader = () => {
  const data: Loader = {
    theAnimals: myAnimals,
    // updateLastFed,
    // isAnimalHungry,
  };
  return data;

  //   if (data) {
  //     return data;
  //   }
};
