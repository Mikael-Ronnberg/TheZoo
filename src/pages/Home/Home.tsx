import { Navigation } from "../../components/Navigation/Navigation";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Navigation></Navigation>
      <h1>Welcome to the Zoo!</h1>
      <p>
        Here we have a selection of a bunch of different animals. Some will need
        to be fed and taken care of!
      </p>
    </>
  );
};
