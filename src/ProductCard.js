import './ProductCard.css';

function ProductCard({ product }) {
    return (
      <div className="product-card">
        <img className="img" src={product.imageUrl} alt={product.name} />
        <h3 className="h3">{product.name}</h3>
        <p className="p">{product.price}</p>
      </div>
    );
  }

  export default ProductCard;