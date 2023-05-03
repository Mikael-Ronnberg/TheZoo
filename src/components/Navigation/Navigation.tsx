import "./Navigation.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Animals</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </>
  );
};
