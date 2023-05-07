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
  animalsProps: IAnimal;
  // onFeed: () => void;
  // fullView?: boolean;
}

export const Animal = ({ animalsProps }: AnimalProps) => {
  // if (fullView === false) {
  return (
    <div>
      <h2>{}</h2>
      <img src={animalsProps.imageUrl} alt={animalsProps.name}></img>
      <p>{animalsProps.shortDescription}</p>
    </div>
  );
  // } else {
  //   return (
  //     <div className="soloanimal-wrapper">
  //       <h1>{animal.name}</h1>
  //       <img
  //         className="animal-img"
  //         src={animal.imageUrl}
  //         alt={animal.name}
  //       ></img>
  //       <p>{animal.shortDescription}</p>
  //       <p>{animal.latinName}</p>
  //       <p>Lite mer information: {animal.longDescription}</p>
  //       <p>Har ätit: {animal.isFed}</p>
  //       <p>Föddes: {animal.yearOfBirth}</p>
  //       {/* <p>Åt senast: {showdate} timmar sedan</p>
  //   <button onClick={handleFeedAnimal}>Mata mig!</button> */}
  //     </div>
  //   );
  // }
};
