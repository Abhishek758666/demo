"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Hero from "./components/Hero";
import HoverImageLinks from "./components/ImageHoverLinks";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative w-full h-[200vh] font-font">
      <Hero />
      <HoverImageLinks />
      <Skills />
      <Footer />
    </main>
  );
}
