import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import Image, { StaticImageData } from "next/image";
import ecomm from "@/public/ecomm.png";
import movie from "@/public/movieflix.png";
import unavailable from "@/public/not-available.webp";

export const HoverImageLinks = () => {
  return (
    <section className="p-4 md:px-8">
      <h1 className="w-full text-[3rem] md:text-[6rem] max-w-6xl mx-auto font-black py-1 pt-10 md:pt-20">
        PROJECTS
      </h1>

      <div className="w-full max-w-6xl mx-auto">
        <Link
          heading="Ecommerce"
          subheading="Ui of ecommerce website"
          imgSrc={ecomm}
          href="https://ecommerce-react-lime-chi.vercel.app/"
        />
        <Link
          heading="SkillSync"
          subheading="a blogging website"
          imgSrc={unavailable}
          href="/unavailable"
        />
        <Link
          heading="MovieFlix"
          subheading="movie and tvshows trailer website"
          imgSrc={movie}
          href="https://movie-flix-beta.vercel.app/"
        />
        <Link
          heading="Video Player"
          subheading="a video player website"
          imgSrc={unavailable}
          href="/unavailable"
        />
      </div>
    </section>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string | StaticImageData;
  subheading: string;
  href: string;
}

const Link = ({ heading, imgSrc, subheading, href }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      target="_blank"
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group tracking-wide relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 hover:bg-primary md:py-4"
    >
      <div className="flex-grow">
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-[1rem] md:text-[2rem] lg:text-[3rem] xl:text-[4rem] font-bold transition-colors duration-500 py-2 md:py-4 group-hover:text-neutral-50"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <p className="text-sm md:text-base text-neutral-400 mt-1">
          {subheading}
        </p>
      </div>

      <motion.div
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        className="absolute z-0 h-24 w-32 md:h-48 md:w-64 hidden md:block"
      >
        <Image
          src={imgSrc}
          alt={`Image representing a link for ${heading}`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </motion.div>

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-2 md:p-4"
      >
        <FiArrowRight className="text-3xl md:text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};

export default HoverImageLinks;
