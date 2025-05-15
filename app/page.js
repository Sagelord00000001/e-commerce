import ExploreByCategory from "@/components/ui/ExploreByCategory";
import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Popularproducts from "@/components/Popularproducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Homepage />
      <ExploreByCategory />
      <Popularproducts/>
    </>
  );
}
