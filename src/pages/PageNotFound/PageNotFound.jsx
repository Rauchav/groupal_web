import "./PageNotFound.css";
import backIcon from "../../../resourses/images/back-solid-blue.svg";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <img
        alt="left arrow icon"
        src={backIcon}
        className="back__icon"
        onClick={() => navigate("/")}
      ></img>
      <h3 className="not-found__title">
        <span>404</span> - ¡Página no encontrada!
      </h3>
      <p className="not-found__text">
        ¡Uy! Aquí no hay nada... Lo sentimos. 🥺
      </p>
    </div>
  );
}

export default PageNotFound;
