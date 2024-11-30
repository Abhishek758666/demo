import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Content() {
  return (
    <div className="bg-[#E64A27] py-8 px-4 sm:px-8 md:px-12 h-full w-full flex flex-col justify-end">
      <Section2 />
    </div>
  );
}

const Section2 = () => {
  return (
    <div className="flex flex-col justify-end items-start py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white uppercase w-full text-left mb-2 sm:mb-4">
        send me message
      </h2>

      <hr className="my-4 sm:my-6 border-gray-200 w-full max-w-6xl mx-auto" />

      <div className="w-full max-w-screen-xl mx-auto py-4 sm:py-6 md:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center justify-center sm:justify-start gap-6 sm:gap-8 md:gap-10 text-xl sm:text-2xl mb-4 sm:mb-0 text-gray-200 dark:text-gray-400">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100078575028419"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abhishek-khati-b4a427299/"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Abhishek758666"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
          {/* <ul className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};
