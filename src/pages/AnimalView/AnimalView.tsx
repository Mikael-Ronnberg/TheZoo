import { useLoaderData, useParams } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import "./AnimalView.css";
import { Loader } from "../../loaders/animalLoader";
import { Animal, IAnimal } from "../Animal/Animal";
import { useState } from "react";

type Props = {
  animal: IAnimal;
};

export const AnimalView = ({ animal }: Props) => {
  const params = useParams();
  const { allTheAnimals, updateLastFed, isAnimalHungry } =
    useLoaderData() as Loader;

  const current = allTheAnimals.find(
    (animal) => animal.id.toString() === params.id
  );

  const handleFeedAnimal = () => {
    if (current !== undefined) {
      const now = new Date();
      updateLastFed(current.id, now);
      window.location.reload();
    }
  };

  if (current === undefined) {
    return (
      <>
        <Navigation />
        <h2>Välj ett djur!</h2>
      </>
    );
  } else {
    let showdate = isAnimalHungry(current);
    return (
      <>
        <Navigation />
        <div className="animalview-container">
          <div className="soloanimal-wrapper">
            <h1>{current.name}</h1>
            <img
              className="animal-img"
              src={current.imageUrl}
              alt={current.name}
            ></img>
            <p>{current.shortDescription}</p>
            <p>{current.latinName}</p>
            <p>Lite mer information: {current.longDescription}</p>
            <p>Har ätit: {current.isFed}</p>
            <p>Föddes: {current.yearOfBirth}</p>
            <p>Åt senast: {showdate} timmar sedan</p>
            <button onClick={handleFeedAnimal}>Mata mig!</button>
          </div>
        </div>
      </>
    );
  }
};
