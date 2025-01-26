import icon from "../../../resourses/images/web-icon-white.svg";
import "./favorites.css";

function Favorites() {
  return (
    <div className="provisional">
      <h1 className="page__title">Favorites</h1>
      <img className="web__icon" src={icon}></img>
      <p className="text__description">
        This is the Favorites page where users will see their favorites saved
        products
      </p>
    </div>
  );
}

export default Favorites;
