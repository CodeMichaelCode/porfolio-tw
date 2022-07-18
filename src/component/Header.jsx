import React from "react";
import { Link } from "react-router-dom";
import { BsCodeSlash } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <nav className="grid bg-darkBlue lg:grid-cols-2">
        <div className="p-10 xl:bg-lightBlue 2xl:px-[20%]">
          <h2 className="text-2xl text-white uppercase font-headers">
            <BsCodeSlash size="2rem" className="inline-block text-darkGray" />{" "}
            CodeMichaelCode
          </h2>
        </div>
        <div className="p-10 py-0 lg:py-10 2xl:px-[20%] xl:bg-darkBlue ">
          <ul className="flex gap-6 text-white font-body lg:justify-end">
            <Link
              className="p-2 border-darkBlue border-b-2 hover:border-b-2 hover:border-white"
              to={"/"}
            >
              <li>Home</li>
            </Link>
            <Link
              className="p-2 border-darkBlue border-b-2 hover:border-b-2 hover:border-white"
              to={"/"}
            >
              <li>Projects</li>
            </Link>
            <Link
              className="p-2 border-darkBlue border-b-2 hover:border-b-2 hover:border-white"
              to={"/"}
            >
              <li>Contact Me</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
