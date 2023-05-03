import { useLoaderData, useParams } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import "./AnimalView.css";
import { Loader } from "../../loaders/animalLoader";
import { Animal } from "../Animal/Animal";

export const AnimalView = () => {
  const params = useParams();
  const { allTheAnimals } = useLoaderData() as Loader;

  const current = allTheAnimals.find(
    (animal) => animal.id.toString() === params.id
  );

  return (
    <>
      <Navigation />
      {/* <Animal {...current} /> */}
    </>
  );
};
