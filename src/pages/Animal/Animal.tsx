import "./Animal.css";

export interface IAnimal {
  id: number;
  imageUrl: string;
  isFed: boolean;
  lastFed: string;
  latinName: string;
  longDescription: string;
  medicine: string;
  name: string;
  shortDescription: string;
  yearOfBirth: number;
}

export const Animal = (animalProps: IAnimal) => {
  return (
    <>
      <div className="animal-wrapper">
        <h2>{animalProps.name}</h2>
        <img src={animalProps.imageUrl} alt={animalProps.name}></img>
      </div>
    </>
  );
};
