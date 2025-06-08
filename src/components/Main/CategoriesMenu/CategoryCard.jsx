function CategoryCard({ name, icon, img }) {
  return (
    <div className="category__card" style={{ "--bg-img": `url(${img})` }}>
      <h2 className="category__card-name">{name}</h2>
      <img className="category__card-icon" alt={name} src={icon} />
    </div>
  );
}

export default CategoryCard;
