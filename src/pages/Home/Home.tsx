import { Navigation } from "../../components/Navigation/Navigation";
import { logJSONData } from "../../loaders/animalLoader";
import "./Home.css";

console.log(logJSONData());

export const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="main-container">
        <h1>Welcome to the Zoo!</h1>
        <p>
          Here we have a selection of a bunch of different animals. Some will
          need to be fed and taken care of!
        </p>
      </div>
    </div>
  );
};
