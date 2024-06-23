import { Link, useParams } from "react-router-dom";
import { formatPrice, productionUrl } from "../utils/index";
import { useEffect, useState } from "react";
import { useFetch } from "../Hooks";
import { ErrorElement, Loading } from "../components";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`${productionUrl}/products/${id}`);
  const [amount, setAmount] = useState(1);
  const [productColor,setProductColor] = useState(null);

  useEffect(() => {
    if (data && data.data && data.data.attributes && data.data.attributes.colors) {
      setProductColor(data.data.attributes.colors[0]);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorElement />;
  }
  const { attributes } = data.data;
  const { image, title, price, description, colors, company } = attributes;
  const dollarsAmount = formatPrice(price);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

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
          {/* colors */}
          <div className='mt-6'>
            <h4 className='text-md font-medium tracking-wider capitalize'>
              colors
            </h4>
            <div className='mt-2'>
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type='button'
                    className={`badge  w-6 h-6 mr-2  ${
                      color === productColor && 'border-2 border-secondary'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* amount */}
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <h4 className='text-md font-medium tracking-wider capitalize'>
                amount
              </h4>
            </label>
            <select
              className='select select-secondary select-bordered select-md'
              value={amount}
              onChange={handleAmount}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          {/* Cart */}
          <div className='mt-10 '>
            <button
              className='btn btn-secondary btn-md'
              onClick={() => console.log('add to bag')}
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;

// import { Link, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import useFetch from "../Hooks/useFetch"; // Adjust the import path as necessary
// import { formatPrice, productionUrl } from "../utils/index"; // Assuming formatPrice is a utility function
// import { ErrorElement, Loading } from "../components"; // Assuming these are your components

// const SingleProduct = () => {
//   const { id } = useParams();

//   // Fetch product data
//   const { data, error, loading } = useFetch(`${productionUrl}/products/${id}`);

//   // Default states
//   const [color, setColor] = useState(null);
//   const [amount, setAmount] = useState(null);

//   // Set the default color once data is fetched
//   useEffect(() => {
//     if (data && data.data && data.data.attributes && data.data.attributes.colors) {
//       setColor(data.data.attributes.colors[0]);
//     }
//   }, [data]);

//   if (loading) {
//     return <Loading />;
//   }

//   if (error) {
//     return <ErrorElement message={error} />;
//   }

//   if (!data || !data.data || !data.data.attributes) {
//     return <div>No data available</div>;
//   }

//   const { attributes } = data.data;
//   const { image, title, price, description, colors, company } = attributes;
//   const dollarsAmount = formatPrice(price);

//   return (
//     <section>
//       <div className="text-md breadcrumbs">
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/products">Products</Link>
//           </li>
//           <li>{title}</li>
//         </ul>
//       </div>
//       <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
//         {/* IMAGE */}
//         <img
//           src={image}
//           alt={title}
//           className="w-96 h-96 object-cover rounded-lg lg:w-full"
//         />
//         {/* PRODUCT INFO */}
//         <div>
//           <h1 className="capitalize text-3xl font-bold">{title}</h1>
//           <h4 className="text-xl text-neutral-content font-bold mt-2">
//             {company}
//           </h4>
//           <p className="mt-3 text-xl">{dollarsAmount}</p>
//           <p className="mt-6 leading-8">{description}</p>
//           <p><strong>Selected Color:</strong> {color}</p>
//           <p><strong>Available Colors:</strong> {colors.join(', ')}</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SingleProduct;
