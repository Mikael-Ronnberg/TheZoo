import { IAnimal } from "../../models/IAnimal";
import "./Animal.css";

export interface AnimalProps extends IAnimal {
  fullView?: boolean;
  onFeed?: (i: number) => void;
  isAnimalHungry?: (id: number) => string | undefined;
}

export const Animal = ({
  id,
  name,
  imageUrl,
  isFed,
  latinName,
  longDescription,
  shortDescription,
  yearOfBirth,
  fullView,
  onFeed,
  isAnimalHungry,
}: AnimalProps) => {
  const handleBtn = () => {
    if (onFeed !== undefined) {
      onFeed(id);
    }
  };

  let showdate;
  if (isAnimalHungry !== undefined) {
    showdate = isAnimalHungry(id);
  }

  if (fullView === false) {
    return (
      <div className={"animal-wrapper"}>
        <h2>{name}</h2>
        <img
          className="animals-img"
          src={imageUrl}
          alt={name}
          onError={(e: any) => {
            e.target.onerror = null;
            e.target.src =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2uRe754a4u81lJrGbp9EEa-RNwLCsjAQGwVdKQhPdDf-DmWJ59SdBOJECrNKW67m4kQ&usqp=CAU";
          }}
        ></img>
        {/* <p>{animal.shortDescription}</p> */}
      </div>
    );
  } else {
    return (
      <div className="soloanimal-wrapper">
        <h1>{name}</h1>
        <img
          className="animals-img"
          src={imageUrl}
          alt={name}
          onError={(e: any) => {
            e.target.onerror = null;
            e.target.src =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF2uRe754a4u81lJrGbp9EEa-RNwLCsjAQGwVdKQhPdDf-DmWJ59SdBOJECrNKW67m4kQ&usqp=CAU";
          }}
        ></img>
        <p>{shortDescription}</p>
        <p>{latinName}</p>
        <p>Lite mer information: {longDescription}</p>
        <p>Har ätit: </p>
        <input type="checkbox" checked={isFed} readOnly />
        <p>Föddes: {yearOfBirth}</p>
        <p>Åt senast: {showdate} timmar sedan</p>
        <button onClick={handleBtn}>Mata mig!</button>
      </div>
    );
  }
};
