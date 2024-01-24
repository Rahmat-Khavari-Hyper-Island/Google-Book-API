import React, { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const { updateProducts } = useContext(ProductContext);

  const handleSearch = async () => {
    try {
      const apiKey = "AIzaSyA6MiaAOYSh1yvAfsgDoM7s5GWGmdll8Q0";
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchText}&projection=lite&key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }
      const data = await response.json();
      updateProducts(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        marginBottom: "100px",
        justifyContent: "center",
      }}
    >
      <input
        type="text"
        placeholder="Enter book title"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Header;
