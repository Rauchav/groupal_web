import icon from "../../../resourses/images/web-icon-white.svg";
import Greetings from "./Greetings";
import "./home.css";

function Home({ setLang, setName }) {
  const toggleLang = () => {
    setLang((prevLang) => (prevLang === "es" ? "en" : "es"));
  };

  const toggleUser = () => {
    setName((prevUser) => (prevUser === "user1" ? "user2" : "user1"));
  };

  return (
    <div className="provisional">
      <h1 className="page__title">Home Page</h1>
      <img className="web__icon" src={icon}></img>
      <p className="text__description">
        This is the Home screen where the user will start experiensing with the
        app
      </p>
      <Greetings />
      <div className="buttons__container">
        <button className="button__home" onClick={toggleLang}>
          Cambiar Lenguaje
        </button>
        <button className="button__home" onClick={toggleUser}>
          Cambiar Nombre
        </button>
      </div>
    </div>
  );
}

export default Home;
