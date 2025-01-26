import { NavLink } from "react-router-dom";
import "../../../styles/navBar.css";

function NavBar() {
  const customClassName = ({ isActive }) =>
    "navBar__link" + (isActive ? "-active" : "");

  return (
    <nav className="navBar__menu">
      <NavLink to="/favorites" className={customClassName}>
        Mis Favoritos
      </NavLink>
      <NavLink to="/mylocker" className={customClassName}>
        Compras
      </NavLink>
      <NavLink to="/notifications" className={customClassName}>
        Notificaciones
      </NavLink>
      <NavLink to="/reviews" className={customClassName}>
        Reviews
      </NavLink>
    </nav>
  );
}

export default NavBar;
