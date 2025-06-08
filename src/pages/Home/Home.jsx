import MostWanted from "../../components/Main/MostWanted/MostWanted";
import AddBanner from "../../components/Main/AddBanner/AddBanner";
import CategoriesMenu from "../../components/Main/CategoriesMenu/CategoriesMenu";
import { categories } from "../../mockUpData/categories";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <AddBanner />
      <div className="categoriesmenu__title-container">
        <h1 className="categoriesmenu__title">Choose a category</h1>
      </div>
      <CategoriesMenu categories={categories} />
      <div className="mostwanted__title-container">
        <h1 className="mostwanted__title">New groupal offers</h1>
      </div>
      <MostWanted />
    </div>
  );
}

export default Home;
