

import ExploreByCategory from "@/components/ui/ExploreByCategory";
import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
<>
    <ExploreByCategory />
    <div>
      <div className="bg-[#EEEBFF] h-auto md:px-10 px-5 py-4 ">
        <Navbar />
        <Homepage />
      </div>
    </div>
  </>
  );
}
