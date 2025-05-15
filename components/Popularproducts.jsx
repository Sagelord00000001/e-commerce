import React from "react";

const products = [
  {
    id: 1,
    name: "Wooden Chair",
    description: "Comfortable and stylish sneakers for everyday wear.",
    price: 120,
    image: "/Chair.webp",
  },
  {
    id: 2,
    name: "Vintage Chair",
    description: "High-performance running shoes with great cushioning.",
    price: 150,
    image: "/chair.jpg",
  },
  {
    id: 3,
    name: "Sofa",
    description: "Bold and trendy sneakers for a sporty look.",
    price: 110,
    image: "/sofa.jpg",
  },
  {
    id: 4,
    name: "Antique Chair",
    description: "Timeless design with a retro vibe.",
    price: 90,
    image: "/chair2.jpeg",
  },
];

const Popularproducts = () => {
  return (
    <div>
      <h2 className="text-center text-4xl md:text-5xl font-serif font-bold text-teal-800 mb-12">
        Popular Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-10">
        {products.map((product) => (
          <div key={product.id}>
            <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 md:h-80 lg:h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#07484A]">
                  {product.name}
                </h3>
                <p className="text-[#07484A]">{product.description}</p>
                <p className="text-lg font-bold text-teal-800 mt-2">
                  ${product.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popularproducts;
