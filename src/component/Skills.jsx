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
          Skills
        </h2>
        <ul className="flex gap-14 justify-center text-white text-6xl flex-wrap">
          <li>
            <FaHtml5 title="HTML5" />
          </li>
          <li>
            <FaReact title="React" />
          </li>
          <li>
            <SiJavascript title="JavaScript" />
          </li>
          <li>
            <SiTailwindcss title="Tailwind CSS" />
          </li>
          <span className="flex gap-14">
            <li>
              <SiNodedotjs title="Node.js" />
            </li>
            <li>
              <SiExpress title="Express.js" />
            </li>
          </span>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
