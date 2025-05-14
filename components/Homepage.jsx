import React from "react";
import { Button } from "./ui/button";

const Homepage = () => {
  return (
    <div className="py-20 flex flex-col justify-between items-center md:flex-row  gap-10 px-6">
      <div className="text-center md:text-left max-w-md mb-4">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold text-[#07484A] mb-7">
          Exclusive Deals Of <br /> Shoe Collection
        </h1>
        <p className="text-[#07484A] mb-6 font-medium">
          Explore different categories, find the best deals.
        </p>
        <Button className="bg-[#70908b] rounded-md text-white hover:bg-[#07484A] px-10 py-6">
          <a href="/products">Shop Now</a>
        </Button>
      </div>

      <div className="w-full md:w-[400px]">
        <img
          src="/shoe.png"
          alt="Homepage Image"
          className="w-full h-auto object-cover mt-6 md:mt-0 rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default Homepage;
