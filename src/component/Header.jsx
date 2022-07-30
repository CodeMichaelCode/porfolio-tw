import React, { useRef } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { BiUpArrowAlt } from "react-icons/bi";

const Header = () => {
  const top = useRef(null);
  const handleScroll = () => {
    top.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div ref={top}>
      <nav className="grid bg-darkBlue lg:grid-cols-2 contain">
        <div className="pt-10 pb-5 px-5 md:px-14 xl:bg-lightBlue 2xl:px-[20%]">
          <a href="https://www.codemichaelcode.com/" className="cursor-pointer">
            <h2 className="text-2xl text-white uppercase font-headers">
              <BsCodeSlash
                size="2rem"
                className="inline-block text-darkGray mb-1"
              />{" "}
              CodeMichaelCode
            </h2>
          </a>
        </div>
        <div className="px-5 py-0 md:px-14 lg:py-10 2xl:px-[20%] xl:bg-darkBlue ">
          <ul className="flex  text-white font-body md:gap-6 lg:justify-end">
            <a
              className="cursor-pointer p-2 border-darkBlue border-b-2 hover:border-b-2 hover:border-white"
              href="#projects"
            >
              <li>Projects</li>
            </a>
            <a
              className="cursor-pointer p-2 border-darkBlue border-b-2 hover:border-b-2 hover:border-white"
              href="#contact"
            >
              <li>Contact Me</li>
            </a>
          </ul>
        </div>
      </nav>
      <div>
        <span className="fixed bottom-3 right-3 border-solid border-white border-2">
          <BiUpArrowAlt
            className="text-white text-4xl cursor-pointer p-1 bg-darkBlue"
            title="Top"
            onClick={handleScroll}
          />
        </span>
      </div>
    </div>
  );
};

export default Header;
