import { FeaturedProducts, Hero } from "../components";

import { customFetch } from "../utils";
const url = "/products?featured=true";

export const loader = async () => {
  const response = await customFetch(url);
  console.log(response);
  
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      
    </>
  );
};
export default Landing;
