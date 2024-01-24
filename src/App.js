import { useState, useEffect } from 'react';
import './App.css';
import ComparisonTable from './ComparisonTable';
import ProductCard from './ProductCard';

const busimiDuomenys =  [
  {
    name: "Cherry",
    price: "$1.99",
    imageUrl: "/images/cherry.png"

  },
  {
    name: "Orange",
    price: "$1.99",
    imageUrl: "/images/orange.png"

  },
  {
    name: "Nuts",
    price: "$1.99",
    imageUrl: "/images/nuts.png"

  },
  {
    name: "Strawberry",
    price: "$1.99",
    imageUrl: "/images/strawberry.png"

  }
];

const fetchData = () => {
  return new Promise( (resolve, reject) => {
  
    setTimeout( () => {
      const success = Math.random() > 0.3; // 70% tikimybe
      if(success){
        resolve ( busimiDuomenys );
      } else {
        reject ("Duomenų užkrauti nepavyko");
      }

    }, 1000);

  } );

}

function App() {
  const [products, setProducts] = useState( [] );

  useEffect( () => {

    fetchData()
    .then( d => setProducts( d ) )
    .catch( e => console.error (e))

    console.log("Promisas paleistas");
  
  } , [] );


   
  return (
    <div className="app">
      <h1>Compare Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
          <ComparisonTable products={products} />
    </div>
  );
}

export default App;


