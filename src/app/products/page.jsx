import ProductCard from "@/components/productsPage/ProductCard";
import React from "react";

const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: { revalidate: 10 },
  });
  return res.json();
};

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <section className="my-10">
      <div>
        <h2 className="mb-7 text-4xl font-medium text-center">All Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
