/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

export default function InputForm({ products, productsSet: setProducts }) {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("Choose Color");

  // form submit event
  const clearInput = () => {
    setProductId(() => "");
    setProduct(() => "");
    setQuantity(() => "");
    setPrice(() => "");
    setDescription(() => "");
    setColor(() => "Choose Color");
  };

  const handleSubmit = (e) => {
    if (color === "Choose Color") {
      alert("Please a Choose Color");
      return;
    }

    setProducts(() => {
      const updateVal = [
        ...products,
        { productId, product, quantity, price, description, color },
      ];
      return updateVal;
    });

    clearInput();
    e.preventDefault();
  };
  console.log();
  return (
    <form onSubmit={handleSubmit} className="form-group h">
      <label>Product ID</label>
      <input
        value={productId}
        onChange={(e) => {
          setProductId(e.target.value);
        }}
        name="product"
        type="text"
        className="form-control"
        required
      ></input>
      <br></br>
      <label>Product Name</label>
      <input
        value={product}
        onChange={(e) => {
          setProduct(e.target.value);
        }}
        name="product"
        type="text"
        className="form-control"
        required
      ></input>
      <br></br>
      <label>Quantity</label>
      <input
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
        type="number"
        className="form-control"
        required
      ></input>
      <br></br>
      <label>Price</label>
      <input
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        type="number"
        className="form-control"
        required
      ></input>
      <br></br>
      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        className="form-control"
        required
      ></textarea>
      <br></br>
      <label>Color: </label>
      <select
        className="ms-2"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      >
        <option value={color}>{color}</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
      </select>
      <br></br>
      <br></br>
      <button type="submit" className="btn btn-success btn-md">
        ADD
      </button>
    </form>
  );
}
