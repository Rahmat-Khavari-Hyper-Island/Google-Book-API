import React, { useContext } from "react";
import { ProductContext } from "./context/ProductContext";
import Header from "./components/Header";

function App() {
  const { products } = useContext(ProductContext);
  console.log(products);

  return (
    <div>
      <Header />
      {products.map((e) => {
        return (
          <div style={{ marginBottom: "100px" }} key={e.id}>
            <img
              src={e.volumeInfo.imageLinks?.thumbnail}
              alt="There is no book cover for this product!"
            />
            <br />
            <div>{e.volumeInfo.title}</div>
            <div>{e.volumeInfo.authors}</div>
            <div>
              {e.volumeInfo.publishedDate
                ? e.volumeInfo.publishedDate
                : "There is no published date for this book"}
            </div>
            <div>
              {e.saleInfo.retailPrice?.amount &&
              e.saleInfo.retailPrice?.currencyCode
                ? `${e.saleInfo.retailPrice.amount} ${e.saleInfo.retailPrice.currencyCode}`
                : "There is no price for this book"}
            </div>

            <br />
            <div>
              {e.volumeInfo.description
                ? e.volumeInfo.description
                : "There is no description for this book"}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
