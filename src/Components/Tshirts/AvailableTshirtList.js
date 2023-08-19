// src/components/ProductList.js
import React from 'react';

const AvailableTshirtList = ({ products }) => {
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          Name: {product.name}, Description: {product.description}, Price: ${product.price.toFixed(2)}, Quantity: {product.quantity}, Size: {product.size}
        </li>
      ))}
    </ul>
  );
};

export default AvailableTshirtList;
