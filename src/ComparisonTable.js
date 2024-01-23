import './ComparisonTable.css';

function ComparisonTable({ products }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Property</th>
            {products.map(product => (
              <th key={product.name}>{product.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price</td>
            {products.map(product => (
              <td key={product.name}>{product.price}</td>
            ))}
          </tr>
          {/* Galite pridėti daugiau eilučių su produkto savybėmis čia */}
        </tbody>
      </table>
    );
  }

  export default ComparisonTable;