import React from "react";
import { Button } from "./ui/button";

const Homepage = () => {
  return (
   <div className="relative bg-[url('/HeroImage.webp')] bg-cover bg-center h-auto md:px-10 px-5 py-20">
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/70 dark:bg-black/50 z-0" />

  {/* Optional Decorative Element (e.g., blurred shape, pattern) */}
  <div className="absolute right-10 top-10 hidden md:block opacity-20 z-0">
    <img src="/blur-circle.svg" alt="" className="w-32 h-32 object-contain" />
  </div>

  {/* Main Content */}
  <div className="relative z-10 flex flex-col py-10 items-center text-center max-w-4xl mx-auto">
    <h1 className="text-3xl md:text-5xl font-semibold text-[#07484A] mb-6 leading-tight">
      Exclusive Deals Of <br /> Shoe Collection
    </h1>
    <p className="text-[#07484A] font-medium text-lg md:text-xl mb-8 leading-relaxed">
      Explore different categories, find the best deals for your style.
    </p>
    <Button className="bg-[#70908b] text-base rounded-md text-white hover:bg-[#07484A] px-10 py-4 md:px-12 md:py-6 lg:px-16">
      <a href="/products">Shop Now</a>
    </Button>
  </div>
</div>

  );
};

export default Homepage;
