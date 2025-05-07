import Hero from "@/components/Hero";
import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <MouseGlow/>
    <div className=" relative">
      <div className="max-w-7xl mx-auto p-5">
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Skills/>
      </div>
      <Footer/>
    </div>

  </>
    
  );
}
