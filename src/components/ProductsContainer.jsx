import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useState, useEffect } from "react";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState({});
  const [layout, setLayout] = useState("grid");

  async function getData() {
    const resp = await fetch(
      "https://strapi-store-server.onrender.com/api/products"
    );
    const data = await resp.json();
    setMeta(data.meta);
    setProducts(data.data);
  }

  useEffect(() => {
    getData();
  }, []);

  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };

  return (
    <div>
      {/* header */}
      <div>
        {meta.pagination
          ? `${meta.pagination.total} product${
              meta.pagination.total > 1 ? "s" : ""
            }`
          : ""}
        <div className="flex gap-x-2">
          <button
            onClick={() => {
              setLayout("grid");
            }}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => {
              setLayout("list");
            }}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>

      {/* products */}
      <div>
        {layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </div>
  );
};

export default ProductsContainer;
