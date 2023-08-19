// src/components/ProductForm.js
import React, { useState } from "react";

const AvailableTshirt = ({ addProduct }) => {
  const [tshirtName, setTshirtName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("S");

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: tshirtName,
      description,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      size,
    };
    addProduct(product);
    // Reset form fields
    setTshirtName("");
    setDescription("");
    setPrice("");
    setQuantity("");
    setSize("S");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="tshirt-name">T-Shirt Name:</label>
      <input
        type="text"
        id="tshirt-name"
        value={tshirtName}
        onChange={(e) => setTshirtName(e.target.value)}
      />

      <label htmlFor="description">Description:</label>
      <input
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label htmlFor="quantity">Quantity Available:</label>
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <label htmlFor="size">Size:</label>
      <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
      </select>

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AvailableTshirt;
