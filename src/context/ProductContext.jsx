import React, { createContext, useEffect, useState, useContext } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const searchBook = "lord of the rings";
        const apiKey = "AIzaSyA6MiaAOYSh1yvAfsgDoM7s5GWGmdll8Q0";
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchBook}&projection=lite&key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setProducts(data.items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products, updateProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
