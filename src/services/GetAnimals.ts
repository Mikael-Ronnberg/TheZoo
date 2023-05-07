import { IAnimalResponse } from "../models/IAnimalResponse";
import { IAnimal } from "../pages/Animal/Animal";
import axios from "axios";

// export const getAnimals = async (): Promise<IAnimal[]> => {
//   let animals = [];
//   const response = await axios.get<IAnimalResponse>(
//     "https://animals.azurewebsites.net/api/animals"
//   );
//   return (animals = response.data.Loading);
// };

// export async function logJSONData() {
//   const animals = [];
//   if (animals.length === 0) {
//     const response = await fetch(
//       "https://animals.azurewebsites.net/api/animals"
//     );
//     const jsonData = await response.json();

//     for (let i = 0; i < jsonData.length; i++) {
//       animals.push(jsonData[i]);
//     }
//   }
//   return animals;
// }
