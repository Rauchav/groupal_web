import searchIcon from "../../../resourses/images/search-icon.svg";
import NavBarDownRight from "../NavBar/NavBarDownRight";

function SubHeader() {
  return (
    <div className="subheader__container">
      <div className="search__bar-container">
        <div className="search__bar-input-container">
          <img className="search__bar-icon" src={searchIcon} />
          <input
            className="search__bar-input"
            placeholder="What are you looking for?"
          />
        </div>
      </div>
      <NavBarDownRight />
    </div>
  );
}

export default SubHeader;
