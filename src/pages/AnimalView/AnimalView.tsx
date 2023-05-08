import { useLoaderData, useParams } from "react-router-dom";
import "./AnimalView.css";
import { Animal } from "../Animal/Animal";
import { Navigation } from "../../components/Navigation/Navigation";
import { Loader } from "../../loaders/animalLoader";
import { useEffect, useState } from "react";
import { IAnimal } from "../../models/IAnimal";

export const AnimalView = () => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const { theAnimals } = useLoaderData() as Loader;

  useEffect(() => {
    const storedAnimals = localStorage.getItem("animals");
    if (storedAnimals) {
      setAnimals(JSON.parse(storedAnimals));
    } else {
      localStorage.setItem("animals", JSON.stringify(theAnimals));
    }
    checkIfFed(animals);
  }, []);
  const params = useParams();

  const current = animals.find((animal) => animal.id.toString() === params.id);

  const updateLastFed = (animalId: number, didFed: Date) => {
    const updatedAnimals = animals.map((animal) => {
      if (animal.id === animalId) {
        let lastFed = didFed.toISOString();
        return { ...animal, lastFed, isFed: true };
      }
      return animal;
    });

    setAnimals(updatedAnimals);
    localStorage.setItem("animals", JSON.stringify(animals));
  };

  const checkHunger = (id: number) => {
    const hungryAnimal = animals.find((animal) => animal.id === id);
    const now = new Date();
    if (hungryAnimal !== undefined) {
      const sinceFed = new Date(hungryAnimal.lastFed);
      const hoursSinceLastFed = Math.floor(
        (now.getTime() - sinceFed.getTime()) / (1000 * 60 * 60)
      );

      return hoursSinceLastFed.toString();
    }
  };

  const checkIfFed = (fullAnimals: IAnimal[]) => {
    const now = new Date();

    fullAnimals.forEach((ani) => {
      const sinceFed = new Date(ani.lastFed);
      const hoursSinceLastFed = Math.floor(
        (now.getTime() - sinceFed.getTime()) / (1000 * 60 * 60)
      );
      if (hoursSinceLastFed >= 3) {
        animals.map((animal) => {
          if (animal.id === ani.id) {
            return { ...animal, isFed: false };
          }
          setAnimals([...animals, animal]);

          console.log(animals);
        });
      }
    });
  };

  // const isAnimalHungry = (hungryAnimal: IAnimal) => {
  //     const now = new Date();
  //     const sinceFed = new Date(hungryAnimal.lastFed);
  //     const hoursSinceLastFed = Math.floor(
  //       (now.getTime() - sinceFed.getTime()) / (1000 * 60 * 60)
  //     );

  //     if (hoursSinceLastFed >= 3) {
  //         const updatedAnimals = animals.map((animal) => {
  //           if (animal.id === hungryAnimal.id) {return { ...animal, isFed: false };}});
  //       }
  //     }
  //     return hoursSinceLastFed.toString();
  //   };
  // }

  const handleFeedAnimal = (id: number) => {
    const now = new Date();
    updateLastFed(id, now);
  };

  if (current === undefined) {
    return (
      <>
        <Navigation />
        <h2>Välj ett djur!</h2>
      </>
    );
  } else {
    return (
      <>
        <Navigation />
        <div className="animalview-container">
          <Animal
            {...current}
            fullView={true}
            onFeed={() => handleFeedAnimal(current.id)}
            isAnimalHungry={checkHunger}
          ></Animal>
        </div>
      </>
    );
  }
};
