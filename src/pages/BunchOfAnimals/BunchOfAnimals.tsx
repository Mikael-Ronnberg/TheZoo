import "./BunchOfAnimals.css";
import { Link, useLoaderData } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import { Loader } from "../../loaders/animalLoader";
import { Animal, IAnimal } from "../Animal/Animal";
import { useEffect, useState } from "react";

export const BunchOfAnimals = () => {
  const { theAnimals } = useLoaderData() as Loader;
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  // const handleFeed = (i: number) => {
  //   const updatedAnimals = [...animals];
  //   updatedAnimals[i].isFed = true;
  //   updatedAnimals[i].lastFed;
  //   localStorage.setItem("animals", JSON.stringify(updatedAnimals));
  // };

  useEffect(() => {
    const storedAnimals = localStorage.getItem("animals");

    if (storedAnimals) {
      setAnimals(JSON.parse(storedAnimals));
    } else {
      localStorage.setItem("animals", JSON.stringify(theAnimals));
    }
  }, []);

  return (
    <>
      <Navigation></Navigation>
      {animals.map((animal) => (
        <Link key={animal.id} to={animal.id.toString()}>
          <Animal
            {...animal}

            // onFeed={() => handleFeed(i)}
          />
        </Link>
      ))}

      {/* <div className="animals-container">
        {allTheAnimals.map((animal) => (
          <Link key={animal.id} to={animal.id.toString()}>
            <Animal {...animal}></Animal>
          </Link>
        ))}
      </div> */}
    </>
  );
};
