import React from "react";
import { TranslationContext } from "../../components/Context/TranslationContext";
import { CurrentUserContext } from "../../components/Context/CurrentUserContext";

function Greetings() {
  const translation = React.useContext(TranslationContext);
  const userName = React.useContext(CurrentUserContext);

  return (
    <div className="greetings">
      <h2>{`${userName.firstName}, ${translation.greeting}`}</h2>
    </div>
  );
}

export default Greetings;
