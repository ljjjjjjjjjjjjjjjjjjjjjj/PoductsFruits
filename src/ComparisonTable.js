import React from 'react';
import './ComparisonTable.css'; // Importuojame CSS

function ComparisonTable({ products }) {
  return (
    <table className="comparison-table">
      <thead>
        <tr>
          <th>Product</th>
          {products.map(product => (
            <th key={product.name}>{product.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Čia galite pridėti eilutes su produkto savybėmis */}
        <tr>
          <td>Price</td>
          {products.map(product => (
            <td key={product.name}>{product.price}</td>
          ))}
        </tr>
        {/* Pavyzdžiui, kitos savybės... */}
      </tbody>
    </table>
  );
}

export default ComparisonTable;