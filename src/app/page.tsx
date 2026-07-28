import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Research from "@/components/sections/Research";
import Projects from "@/components/sections/Projects";
import Thesis from "@/components/sections/Thesis";
import Experience from "@/components/sections/Experience";
import Publications from "@/components/sections/Publications";
import Pipeline from "@/components/sections/Pipeline";
import Dashboard from "@/components/sections/Dashboard";
import Footer from "@/components/layout/Footer";
import Contributions from "@/components/sections/Contributions";
import Timeline from "@/components/sections/Timeline";
import Skills from "@/components/sections/Skills";
import ResearchShowcase from "@/components/sections/ResearchShowcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Dashboard />
      <About />
      <Research />
      <Contributions />
      <Timeline />
      <Skills />
      <ResearchShowcase />
      <Thesis />
      <Pipeline />
      <Projects />
      <Experience />
      <Publications />
      <Footer />
    </>
  );
}