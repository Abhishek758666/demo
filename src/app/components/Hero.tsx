import { motion, MotionValue, useTransform, useInView } from "framer-motion";
import FuzzyOverlay from "./Overlay";
import VelocityScroll from "./Marquee";
import Image from "next/image";
import profile from "../../public/profile.jpeg";
import { useRef, useState, useEffect } from "react";

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Hero = ({ scrollYProgress }: SectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-white flex flex-col items-center justify-start w-full overflow-hidden"
      initial="hidden"
      animate={isLoaded && isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div variants={childVariants} className="w-full">
        <VelocityScroll text="ABHISHEK ✦ KHATI ✦" default_velocity={-3} />
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row px-4 md:px-8 lg:px-16 py-4 md:py-8 w-full"
        variants={childVariants}
      >
        <motion.p
          className="text-base md:text-lg lg:text-xl font-semibold max-w-full md:max-w-[40%] mb-4 md:mb-0 md:mr-8"
          variants={childVariants}
        >
          I&apos;m a Frontend developer specializing in Next.js and React.js,
          creating responsive, high-performance websites with clean code.
        </motion.p>
        <motion.div className="w-full md:w-[60%]" variants={childVariants}>
          <Image
            src={profile}
            alt="profile"
            layout="responsive"
            width={1000}
            height={1000}
            objectFit="contain"
            priority
          />
        </motion.div>
      </motion.div>
      <FuzzyOverlay />
    </motion.div>
  );
};

export default Hero;
