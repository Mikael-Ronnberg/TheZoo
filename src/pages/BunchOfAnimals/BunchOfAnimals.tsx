import "./BunchOfAnimals.css";
import { Link, useLoaderData } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import { Loader } from "../../loaders/animalLoader";
import { Animal, AnimalProps } from "../Animal/Animal";

type AnimalPropsWithoutFunctions = Omit<
  AnimalProps,
  "isAnimalHungry" | "onFeed"
>;

export const BunchOfAnimals = () => {
  const { theAnimals } = useLoaderData() as Loader;

  return (
    <>
      <Navigation></Navigation>
      <div className="animals-container">
        {theAnimals.map((animal) => (
          <Link key={animal.id} to={animal.id.toString()}>
            <Animal
              {...animal}
              fullView={false}
              {...({} as AnimalPropsWithoutFunctions)}
            />
          </Link>
        ))}
      </div>
    </>
  );
};
