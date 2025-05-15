

import ExploreByCategory from "@/components/ExploreByCategory";
import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
  <>
      <div className="bg-[#e9e9e9] h-auto md:px-10 px-5 py-4 ">
        <Navbar />
        <Homepage />
      </div>
     <ExploreByCategory />
  </>
  );
}
