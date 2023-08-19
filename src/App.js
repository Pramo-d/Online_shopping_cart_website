import React from 'react';
import './App.css';
import AvailableTshirt from './Components/Tshirts/AvailableTshirt';
import AvailableTshirtList from './Components/Tshirts/AvailableTshirtList';
import {AvailableTshirtAction} from './Components/Tshirts/AvailableTshirtAction'

function App() {
  
  const { products, addProduct } =  AvailableTshirtAction();

  return (
    <div className="App">
      <h1>T-Shirt Store</h1>
      <AvailableTshirt addProduct={addProduct} />
      <h2>Products:</h2>
      <AvailableTshirtList products={products} />
    </div>
  );
}

export default App;
