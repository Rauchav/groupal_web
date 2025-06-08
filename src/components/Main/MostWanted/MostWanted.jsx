import ProductCard from "./ProductCard";
import { mostWantedProducts } from "../../../mockUpData/mostWanted";

function MostWanted() {
  return (
    <div className="mostwanted">
      {mostWantedProducts.map((product, index) => (
        <ProductCard
          key={`${product._id}-${index}`}
          name={product.name}
          description={product.description}
          regularPrice={product.regularPrice}
          groupalPrice={product.groupalPrice}
          requieredBuyers={product.requieredBuyers}
          buyers={product.buyers}
          dueDate={product.dueDate}
          category={product.category}
          image={product.img}
        />
      ))}
    </div>
  );
}

export default MostWanted;
