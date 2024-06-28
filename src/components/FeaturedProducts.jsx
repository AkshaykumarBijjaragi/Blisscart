import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';
import { useState,useEffect } from 'react';
const FeaturedProducts = () => {

  
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
      <div className="pt-24 ">
        <SectionTitle text="featured products" />
        <ProductsGrid products={products} />
      </div>
    );
};
export default FeaturedProducts;