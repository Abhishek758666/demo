import NumberTicker from "@/components/magicui/number-ticker";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isLoaded) {
      controls.start({ y: -1000 });
    }
  }, [isLoaded, controls]);

  return (
    <motion.div
      className="w-full h-screen z-[999] fixed top-0 left-0 bg-white flex flex-col items-center justify-center"
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <div className="w-max h-[3.7rem] overflow-hidden">
        <motion.div
          className="text-[3rem] font-bold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {["L", "o", "a", "d", "i", "n", "g", ".", ".", "."].map(
            (char, index) => (
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {char}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
      <div className="absolute bottom-[2rem] left-[2rem] text-5xl">
        <NumberTicker value={100} onComplete={() => setIsLoaded(true)} />
      </div>
    </motion.div>
  );
};

export default Loader;
