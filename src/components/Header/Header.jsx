import logo from "../../../resourses/images/logo-fondo-color.svg";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="link__container">
        <img className="logo" alt="Groupal Logo" src={logo} />
      </Link>
      <NavBar />
    </header>
  );
}

export default Header;
