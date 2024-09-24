import React from "react";
import { IoLogoHtml5 } from "react-icons/io";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { RiReactjsLine, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { useAnimate } from "framer-motion";

const Skills = () => {
  return (
    <>
      <h1 className="mx-auto max-w-6xl text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-black pt-10 sm:pt-16 md:pt-20">
        SKILLS
      </h1>
      <div className="px-2 sm:px-4 py-6 sm:py-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <ClipPathLinks />
        </div>
      </div>
    </>
  );
};

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-neutral-0 border border-neutral-0 w-full sm:divide-y sm:border">
      <div className="grid divide-x divide-neutral-0 grid-cols-1 sm:grid-cols-3 sm:divide-x">
        <LinkBox Icon={IoLogoHtml5} href="#" />
        <LinkBox Icon={SiJavascript} href="#" />
        <LinkBox Icon={FaCss3} href="#" />
      </div>
      <div className="grid divide-x divide-neutral-0 grid-cols-1 sm:grid-cols-2 sm:divide-x">
        <LinkBox Icon={RiReactjsLine} href="#" />
        <LinkBox Icon={RiNextjsFill} href="#" />
      </div>
      <div className="grid divide-x divide-neutral-0 grid-cols-2 sm:grid-cols-4 sm:divide-x">
        <LinkBox Icon={BsFiletypeScss} href="#" />
        <LinkBox Icon={RiTailwindCssFill} href="#" />
        <LinkBox Icon={SiTypescript} href="#" />
        <LinkBox Icon={TbBrandFramerMotion} href="#" />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

interface LinkBoxProps {
  Icon: React.ComponentType<{ className: string }>;
  href: string;
}

const LinkBox = ({ Icon, href }: LinkBoxProps) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ): "left" | "right" | "top" | "bottom" => {
    const target = e.target as HTMLElement;
    const box = target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as const,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as const,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as const,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as const,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-16 sm:h-20 md:h-28 lg:h-36 w-full place-content-center"
    >
      <Icon className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-white text-black"
      >
        <Icon className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
      </div>
    </a>
  );
};

export default Skills;
