import React from "react";
import { BsCodeSlash } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <nav className="grid bg-darkBlue lg:grid-cols-2">
        <div className="pt-10 pb-5 px-5 md:px-14 xl:bg-lightBlue 2xl:px-[20%]">
          <h2 className="text-2xl text-white uppercase font-headers">
            <BsCodeSlash size="2rem" className="inline-block text-darkGray" />{" "}
            CodeMichaelCode
          </h2>
        </div>
        <div className="px-5 py-0 md:px-14 lg:py-10 2xl:px-[20%] xl:bg-darkBlue ">
          <ul className="flex  text-white font-body md:gap-6 lg:justify-end">
            <a
              className="scroll-smooth cursor-pointer p-2 border-darkBlue border-b-2 hover:border-b-2 hover:border-white"
              href="#projects"
            >
              <li>Projects</li>
            </a>
            <a
              className="scroll-smooth cursor-pointer p-2 border-darkBlue border-b-2 hover:border-b-2 hover:border-white"
              href="#contact"
            >
              <li>Contact Me</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
