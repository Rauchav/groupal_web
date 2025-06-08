import { NavLink } from "react-router-dom";
import chekoutCartIcon from "../../../resourses/images/checkoutcart-icon.svg";
import "../../../styles/navBar.css";

function NavBarUpRight() {
  return (
    <nav className="navbarupright__container">
      <h3 className="navbarupright__onboarding-button">Groupal buying?</h3>
      <div className="navbarupright__signin-button">Sign In</div>
      <NavLink to="/notifications" className="navBar__link">
        <img className="navbar__icon" src={chekoutCartIcon} />
      </NavLink>
    </nav>
  );
}

export default NavBarUpRight;
