import { motion, MotionValue, useTransform } from "framer-motion";
import React from "react";
import Skills from "./Skills";
import HoverImageLinks from "./ImageHoverLinks";
import Footer from "./Footer";

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Other = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="relative min-h-[100vh] bg-[#1b1b1b] text-white"
    >
      <HoverImageLinks />
      <Skills />
      <Footer />
    </motion.div>
  );
};

export default Other;
