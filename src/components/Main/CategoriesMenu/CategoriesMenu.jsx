import CategoryCard from "./CategoryCard";

const CategoriesMenu = ({ categories }) => {
  return (
    <div className="categories__menu">
      {categories.map((category, index) => (
        <CategoryCard
          key={`${category._id}-${index}`}
          name={category.name}
          image={category.img}
          icon={category.icon}
        />
      ))}
    </div>
  );
};

export default CategoriesMenu;
