import './App.css';
import ComparisonTable from './ComparisonTable.js';
import ProductCard from './ProductCard.js'


function App() {
  const products = [
    {
      name: "Cherry",
      price: "$1.99",
      imageUrl: "/images/cherries.png"

    },
    {
      name: "Avocado",
      price: "$1.99",
      imageUrl: "/images/avocados.png"

    },
    {
      name: "Bananas",
      price: "$1.99",
      imageUrl: "/images/bananas.png"

    },
    {
      name: "Watermelon",
      price: "$1.99",
      imageUrl: "/images/watermelon.png"

    },
  ];

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
