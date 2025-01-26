import icon from "../../../resourses/images/web-icon-white.svg";
import "./notifications.css";

function Notifications() {
  return (
    <div className="provisional">
      <h1 className="page__title">Notifications</h1>
      <img className="web__icon" src={icon}></img>
      <p className="text__description">
        This is the Notifications page where users will be able to be notified
        about their purchases
      </p>
    </div>
  );
}

export default Notifications;
