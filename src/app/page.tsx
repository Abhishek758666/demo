"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Hero from "./components/Hero";
import Other from "./components/OtherSection";
import Loader from "./components/Loader";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

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
      <Loader />
      <Hero scrollYProgress={scrollYProgress} />

      <Other scrollYProgress={scrollYProgress} />
    </main>
  );
}
