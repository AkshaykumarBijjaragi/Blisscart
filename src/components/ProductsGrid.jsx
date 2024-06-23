import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
import { useEffect, useState } from "react";

const ProductsGrid = () => {
  // const { products } = useLoaderData();

  const [products, setProducts] = useState([]);

  async function getData() {
    const resp = await fetch(
      "https://strapi-store-server.onrender.com/api/products?featured=true"
    );
    const data = await resp.json();
    setProducts(data.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{dollarsAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
