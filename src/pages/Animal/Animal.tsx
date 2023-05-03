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

export interface AnimalProps {
  Animals: IAnimal[];
}

export const Animal = ({ name, imageUrl }: IAnimal) => {
  return (
    <>
      <div className="animal-wrapper">
        <h2>{name}</h2>
        <img src={imageUrl} alt={name}></img>
      </div>
    </>
  );
};
