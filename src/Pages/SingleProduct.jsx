import { Link, useParams } from "react-router-dom";
import { formatPrice, productionUrl } from "../utils/index";
import { useEffect, useState } from "react";
import { useFetch } from "../Hooks";
import { ErrorElement, Loading } from "../components";

const SingleProduct = () => {
  const { id } = useParams();
  const [color, setColor] = useState(null);
  const [amount, setAmount] = useState(null);

  const { data, error, loading } = useFetch(`${productionUrl}/products/${id}`);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorElement />;
  }
  const { attributes } = data.data;
  const { image, title, price, description, colors, company } = attributes;
  const dollarsAmount = formatPrice(price);

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products"> products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full  "
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>

          <p className="mt-3 text-xl">{dollarsAmount}</p>

          <p className="mt-6 leading-8">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
