
import React, { useState, useEffect } from "react";
import "./makeup.css";


const Makeup = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${keyword}`
      )

      const data = await response.json();

      setProducts(data); 
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [keyword]);

  const handleSearch = () => {
    setProducts([]);
    fetchProducts();
    console.log("Search");
  };

  const searchedData = products.map((product) => (
    <div className="one" key={product.code}>
      <h3>{product.name}</h3>
      <h3>{product.brand}</h3>
     
      <p className="price">{product.price}$</p>

      {product.image_link && (
        <img 
          src={product.image_link}
          alt={product.name}
          className="img"
        />
      )}
    </div>
  ));

  return (
    <div className="containerProducts">
      <div className="searchBar">
        <div className="title">
          <h1>Search for products</h1>
        </div>

        <input
          className="input"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button onClick={handleSearch} className="button">
          Get Result
        </button>
      </div>
      <div className="result">{searchedData}</div>
    </div>
  );
};

export default Makeup;
