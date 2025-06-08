import { NavLink, Link } from "react-router-dom";
import favoritesIcon from "../../../resourses/images/heart-icon.svg";
import userProfilIcon from "../../../resourses/images/user-profile-icon.svg";
import notificationsIcon from "../../../resourses/images/notifications-icon.svg";
import "../../../styles/navBar.css";

function NavBarDownRight() {
  return (
    <nav className="navbardownright__menu">
      <NavLink to="/notifications" className="navBar__link">
        <img className="navbar__icon" src={notificationsIcon} />
      </NavLink>
      <NavLink to="/favorites" className="navBar__link">
        <img className="navbar__icon" src={favoritesIcon} />
      </NavLink>
      <NavLink to="/userprofile" className="navBar__link">
        <img className="navbar__icon" src={userProfilIcon} />
      </NavLink>
    </nav>
  );
}

export default NavBarDownRight;
