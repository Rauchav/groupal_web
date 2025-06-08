import groupalLogo from "../../../../resourses/images/logo-fondo-blanco.svg";
import userIcon from "../../../../resourses/images/user-icon.svg";
import timerIcon from "../../../../resourses/images/timer-icon.svg";

function ProductCard(card) {
  return (
    <div className="card">
      <div className="image__container">
        <div className="requiered__user-container">
          <div className="requiered__user-number-box">
            <p className="requiered__user-number">6</p>
            <img className="user-icon" src={userIcon} />
          </div>
          <div className="requiered__user-text-box">
            <p className="requiered__user-text">buyers more to go</p>
          </div>
        </div>
        <div className="days__left-container">
          <div className="days__left-number-box">
            <p className="days__left-number">3</p>
            <img className="timer-icon" src={timerIcon} />
          </div>
          <div className="requiered__user-text-box">
            <p className="requiered__user-text">days left!</p>
          </div>
        </div>
        <img className="card__picture" src={card.image} />
      </div>
      <div className="card__info-bar">
        <h3 className="card__info-bar-productName">{card.name}</h3>
        <div className="card__info-bar-regularPrice">
          <p className="regularPrice__text">In store price</p>
          <p className="regularPrice__price">USD {card.regularPrice}</p>
        </div>
        <div className="card__info-bar-groupalPrice">
          <div className="groupalPrice__title">
            <img className="groupalPrice__logo" src={groupalLogo} />
            <p className="groupalPrice__title-text">price</p>
          </div>
          <p className="groupalPrice__price">USD {card.groupalPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
