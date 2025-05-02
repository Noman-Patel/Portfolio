import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
      <div className="max-w-7xl mx-auto p-5">
        <Navbar/>
        <Hero/>
      </div>
      <div className="-z-10 h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full" />
    </div>

  </>
    
  );
}
