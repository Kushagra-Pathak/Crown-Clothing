import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CategoryPreview = ({ title, products }) => {
  const { setIsCartOpen } = useContext(CartContext);
  useEffect(() => {
    setIsCartOpen(false);
  }, []);
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default CategoryPreview;
