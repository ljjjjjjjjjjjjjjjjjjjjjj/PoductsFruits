import { useState } from 'react';
import './ProductCard.css';
import './custom-bootstrap.css';
import config from './config.js';


function ProductCard({produktas, onButtonClick }) {

  const [product, setProduct] = useState(produktas);

  const handleButtonClick = () => {
    setProduct( prevProduct => ({...prevProduct, name:'Sold out'}));

  };


    return (
      <div className="product-card">
        <img src={ config + product.imageUrl} alt={product.name} />
        <h3>{product.name}</h3>
        <p> {product.price}&nbsp;&nbsp;({product.weight})</p>
        <button type="button" className="btn btn-primary" onClick={handleButtonClick}> 
        Add to cart 
        </button>
      </div>
    );
  }

  export default ProductCard;


