import { useEffect, useState } from "react";
import { FormCheckbox, FormInput, FormRange, FormSelect } from "../components";
import { productionUrl } from "../utils";
import { Link } from "react-router-dom";

export default function Filters() {
  const [data, setData] = useState();
  async function getData() {
    try {
      const response = await fetch(`${productionUrl}/products`);
      const data = await response.json();
      setData(data);
      console.log(data.meta);
    } catch (Error) {
      console.log(Error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* search */}
      <FormInput
        type={"search"}
        name={"search"}
        label={"search"}
        defaultValue={"search"}
      />
      {/* categories */}
      <FormSelect
        name={"categories"}
        label={"select category"}
        size={"select-sm"}
        list={data ? data.meta.categories : null}
      />
      {/* companies */}
      <FormSelect
        name={"companies"}
        label={"select companies"}
        size={"select-sm"}
        list={data ? data.meta.companies : null}
      />
      {/* sortby */}
      <FormSelect
        label={"Sort by"}
        name={"order"}
        list={["a-z", "z-a,", "high", "low"]}
        size={"select-sm"}
      />
      {/* pricerange */}
      <FormRange name="Price" size="range - sm" label="select price" />
      {/* shippingcheckbox */}
      <FormCheckbox label="free shipping" name="shipping" size="checkbox-sm" />
      {/* buttons */}
      <button type="submit" className="btn btn-primary btn-sm ">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </div>
  );
}
