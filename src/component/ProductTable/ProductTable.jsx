import { useEffect, useState } from "react";
import InputForm from "../FormData/FormData";
import Product from "../ProductRow/ProductRow";

export default function Products() {
  // main array of objects state || products state || products array of objects
  const [products, setProducts] = useState(getSavedData());

  // delete book from LS
  const handleDelete = (productId) => {
    setProducts((preProducts) => {
      const updateProducts = preProducts.filter(
        (product) => product.productId !== productId
      );
      return updateProducts;
    });
  };

  const handleRemove = () => {
    setProducts(() => []);
    localStorage.clear();
  };

  // saving data to local storage

  function getSavedData() {
    return JSON.parse(localStorage.getItem("products")) ?? [];
  }

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <>
      <div className="wrapper">
        <h1>Product List</h1>
        <p>Add and view your products using local storage</p>
        <div className="main">
          <div className="form-container ">
            <InputForm products={products} productsSet={setProducts} />
          </div>
          <div className="view-container">
            {products.length > 0 ? (
              <>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Description</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...products]
                        .sort((a, b) => a.invoiceNo - b.invoiceNo)
                        .map((product) => (
                          <Product
                            key={product.invoiceNo}
                            product={product}
                            handleDelete={handleDelete}
                          />
                        ))}
                    </tbody>
                  </table>
                </div>
                <button
                  className="btn btn-danger btn-md"
                  onClick={handleRemove}
                >
                  Remove All
                </button>
              </>
            ) : (
              <h1>No products Are Added Yet!!</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
