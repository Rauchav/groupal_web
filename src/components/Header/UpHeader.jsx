import headerLogo from "../../../resourses/images/logo-fondo-color.svg";
import NavBarUpRight from "../NavBar/NavBarUpRight";

function UpHeader() {
  return (
    <div className="upheader__container">
      <img className="logo" src={headerLogo} />
      <NavBarUpRight />
    </div>
  );
}

export default UpHeader;
