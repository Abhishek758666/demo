import { motion } from "framer-motion";
import VelocityScroll from "./Marquee";
import Image from "next/image";
import Nav from "./Nav";
import Magnetic from "./Magnetic";
import profile from "../../public/profile.jpg";

const Hero = () => {
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
            Hello! I&apos;m a versatile software developer who thrives on
            transforming technical challenges into scalable web applications.
            Specializing in React, Next.js, and SQL, I craft dynamic and
            engaging user interfaces that not only enhance the overall user
            experience but also drive interaction and retention.
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
          <a
            href="/cv.pdf"
            download="Abhishek_Khati_CV.pdf"
            className="w-[9.125rem] h-[9.125rem] bg-blue-400 flex justify-center items-center rounded-full cursor-pointer text-white"
          >
            Download CV
          </a>
        </Magnetic>
      </div>
      <motion.div className="w-full -mt-[16rem]">
        <VelocityScroll text="A FRONTEND DEVELOPER" default_velocity={2} />
      </motion.div>
    </div>
  );
};

export default Hero;
