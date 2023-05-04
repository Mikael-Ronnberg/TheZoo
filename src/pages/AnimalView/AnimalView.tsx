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

  if (current === undefined) {
    return <h2>Välj ett djur!</h2>;
  } else {
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
            <p>Åt senast: {current.lastFed}</p>
          </div>
        </div>
      </>
    );
  }
};
