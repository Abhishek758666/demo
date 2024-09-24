"use client";

import Image from "next/image";
import React from "react";
import unavailable from "@/public/not-available.webp";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Image
        src={unavailable}
        alt="unavailable"
        height={1000}
        width={1000}
        className="w-auto h-[60vh] object-cover"
      />
    </div>
  );
};

export default page;
