import { Link, useLoaderData } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import "./BunchOfAnimals.css";
import { Loader } from "../../loaders/animalLoader";
import { Animal } from "../Animal/Animal";

export const BunchOfAnimals = () => {
  const { allTheAnimals } = useLoaderData() as Loader;

  return (
    <>
      <Navigation></Navigation>
      <div className="animals-container">
        {allTheAnimals.map((animal) => (
          <Link key={animal.id} to={animal.id.toString()}>
            <Animal {...animal}></Animal>
          </Link>
        ))}
      </div>
    </>
  );
};
