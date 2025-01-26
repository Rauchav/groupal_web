import Header from "./Header/Header";
import Home from "../pages/Home/Home";
import MyLocker from "../pages/MyLocker/MyLocker";
import Favorites from "../pages/Favorites/Favorites";
import Notifications from "../pages/Notifications/Notifications";
import Reviews from "../pages/Reviews/Reviews";
import Review from "../pages/Review/Review";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import React from "react";
import { TranslationContext, translations } from "./Context/TranslationContext";
import { CurrentUserContext, users } from "./Context/CurrentUserContext";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [reviews, setReviews] = useState([]);
  const [lang, setLang] = React.useState("es");
  const [name, setName] = React.useState("user1");

  useEffect(() => {
    fetch("https://emoji-critic.es.tripleten-services.com/v1/reviews")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route
          path="/"
          element={
            <TranslationContext.Provider value={translations[lang]}>
              <CurrentUserContext.Provider value={users[name]}>
                <Home setLang={setLang} setName={setName} />
              </CurrentUserContext.Provider>
            </TranslationContext.Provider>
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/mylocker" element={<MyLocker />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route
          path="/reviews/:reviewId"
          element={<Review reviews={reviews} />}
        />
      </Routes>
    </>
  );
}

export default App;
