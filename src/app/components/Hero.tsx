"use client";
import { motion } from "framer-motion";
import VelocityScroll from "./Marquee";
import Image from "next/image";
import Nav from "./Nav";
import Magnetic from "./Magnetic";
import profile from "../../public/profile.gif";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV_ABHISHEK_KHATI.pdf";
    link.download = "CV_BHISHEK_KHATI.pdf";
    link.click();
  };
  return (
    <div>
      <Nav />
      <motion.div className="flex flex-col md:flex-row justify-start gap-[12.5rem] pt-[20vh] w-full max-w-7xl mx-auto">
        <div className="left font-semibold text-[9.25rem] leading-[82%] tracking-[-0.04em] uppercase">
          <h1>ABHISHEK</h1>
          <h1>KHATI</h1>
        </div>
        <div className="right w-full">
          <p>
            Passionate Frontend Developer skilled in creating responsive,
            user-centric web applications using modern technologies like
            Next.js, React.js, and Tailwind CSS. Eager to contribute to dynamic
            teams and solve challenging problems
          </p>
        </div>
      </motion.div>
      <div className="w-full flex justify-between items-start pt-10 flex-col md:flex-row max-w-7xl mx-auto ">
        <p className="flex flex-col">
          <span>Software Engineer</span>
        </p>
        <div className="img-section w-[33.125rem] z-20">
          <Image src={profile} alt="profile" className="w-full h-full" />
        </div>
        <Magnetic>
          <div
            onClick={handleDownload}
            className="w-[9.125rem] h-[9.125rem] bg-[#E64A27] flex justify-center items-center rounded-full cursor-pointer text-white"
          >
            Download CV
          </div>
        </Magnetic>
      </div>
      <motion.div className="w-full -mt-[16rem]">
        <VelocityScroll text="A FRONTEND DEVELOPER" default_velocity={2} />
      </motion.div>
    </div>
  );
};

export default Hero;
