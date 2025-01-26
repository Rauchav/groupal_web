import React, { useState } from "react";
import icon from "../../../resourses/images/web-icon-white.svg";
import Compras from "./Compras";
import Adelantos from "./Adelantos";
import "./myLocker.css";

function MyLocker() {
  const [activeComponent, setActiveComponent] = useState("Adelantos");

  const renderElement = () => {
    if (activeComponent === "Adelantos") {
      return <Adelantos />;
    }
    return <Compras />;
  };

  return (
    <div className="provisional">
      <h1 className="page__title">My Locker</h1>
      <img className="web__icon" src={icon}></img>
      {renderElement()}
      <div className="buttons__container">
        <button
          className="button__my-locker"
          onClick={() => setActiveComponent("Adelantos")}
        >
          Adelantos
        </button>
        <button
          className="button__my-locker"
          onClick={() => setActiveComponent("Compras")}
        >
          Compras
        </button>
      </div>
    </div>
  );
}

export default MyLocker;
