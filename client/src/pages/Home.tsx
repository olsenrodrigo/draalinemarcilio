import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Areas from "@/components/Areas";
import Treatments from "@/components/Treatments";
import Differentials from "@/components/Differentials";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

/** Revela os blocos .reveal conforme entram na viewport. */
function useReveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.classList.add("reveal-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      // margem inferior positiva: o bloco já entra revelado, sem "buraco" branco ao rolar rápido
      { rootMargin: "0px 0px 12% 0px", threshold: 0 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  useReveal();

  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Areas />
        <Treatments />
        <Differentials />
        <Locations />
        <Testimonials />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
