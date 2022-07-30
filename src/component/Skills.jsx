import React from "react";
import { FaReact, FaHtml5 } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSass,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="bg-darkGray">
      <section className="container mx-auto p-10">
        <h2 className="font-headers text-white mb-8 text-center text-4xl capitalize">
          Skills
        </h2>
        <ul className="flex gap-14 justify-center text-white text-6xl flex-wrap">
          <li className="text-center">
            <FaHtml5 title="HTML5" className="mx-auto" />
            <span className="text-lg">HTML5</span>
          </li>
          <li className="text-center">
            <FaReact title="React" className="mx-auto" />
            <span className="text-lg">React</span>
          </li>
          <li className="text-center">
            <SiJavascript title="JavaScript" className="mx-auto" />
            <span className="text-lg">JavaScript</span>
          </li>
          <li className="text-center">
            <SiTailwindcss title="Tailwind CSS" className="mx-auto" />
            <span className="text-lg">TailwindCss</span>
          </li>
          <li className="text-center">
            <SiSass title="SASS" className="mx-auto" />
            <span className="text-lg">Sass</span>
          </li>
          <span className="flex gap-14">
            <li className="text-center">
              <SiNodedotjs title="Node.js" className="mx-auto" />
              <span className="text-lg">Node.js</span>
            </li>
            <li className="text-center">
              <SiExpress title="Express.js" className="mx-auto" />
              <span className="text-lg">Express.js</span>
            </li>
          </span>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
