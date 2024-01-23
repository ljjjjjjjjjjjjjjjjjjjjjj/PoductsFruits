import './App.css';
import ComparisonTable from './ComparisonTable';
import ProductCard from './ProductCard';

function App() {
  const products = [
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


