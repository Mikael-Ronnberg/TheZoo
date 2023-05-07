import { useLoaderData, useParams } from "react-router-dom";
import "./AnimalView.css";
import { Animal, IAnimal } from "../Animal/Animal";
import { Navigation } from "../../components/Navigation/Navigation";
import { Loader } from "../../loaders/animalLoader";

// type AnimalProps = {
//   animals: IAnimal[];
// };

export const AnimalView = () => {
  const { theAnimals } = useLoaderData() as Loader;

  const params = useParams();

  const current = theAnimals.find(
    (animal) => animal.id.toString() === params.id
  );

  // const handleFeedAnimal = () => {
  //   if (current !== undefined) {
  //     const now = new Date();
  //     updateLastFed(current.id, now);
  //     window.location.reload();
  //   }
  // };

  if (current === undefined) {
    return (
      <>
        <Navigation />
        <h2>Välj ett djur!</h2>
      </>
    );
  } else {
    // let showdate = isAnimalHungry(current);
    return (
      <>
        <Navigation />
        <div className="animalview-container">
          <Animal {...current}></Animal>
        </div>
      </>
    );
  }
};
