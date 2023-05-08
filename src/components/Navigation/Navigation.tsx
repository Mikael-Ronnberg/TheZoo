import "./Navigation.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <nav className="nav-container">
        <ul className="link-container">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/animals"}>Animals</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
