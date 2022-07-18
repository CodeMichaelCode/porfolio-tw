import React from "react";
import { FaReact, FaHtml5 } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="bg-darkGray">
      <section className="container mx-auto p-10">
        <h2 className="font-headers text-white mb-8 text-center text-4xl capitalize">
          technologies<span className="text-5xl align-text-bottom">/</span>
          frameworks
        </h2>
        <ul className="flex gap-14 justify-center text-white text-6xl flex-wrap">
          <li>
            <FaHtml5 />
          </li>
          <li>
            <FaReact />
          </li>
          <li>
            <SiJavascript />
          </li>
          <li>
            <SiTailwindcss />
          </li>
          <span className="flex gap-14">
            <li>
              <SiNodedotjs />
            </li>
            <li>
              <SiExpress />
            </li>
          </span>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
