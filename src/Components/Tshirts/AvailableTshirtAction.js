
import { useState } from 'react';

  const  AvailableTshirtAction = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts(prevProducts => [...prevProducts, product]);
  };

  return { products, addProduct };
};
export {AvailableTshirtAction};