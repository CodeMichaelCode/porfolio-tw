import React, { useState } from "react";
import FEProjects from "./FEProjects";
import EmailProjects from "./EmailProjects";

const Projects = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <section className="bg-slate-100 py-20" id="projects">
      <h2 className="text-5xl uppercase text-center font-headers mb-14 underline decoration-dotted decoration-darkBlue decoration-6">
        Projects
      </h2>
      <div className="flex flex-row justify-center">
        <p
          className={`mr-6 my-auto text-lg font-body transition-all duration-500 ${
            !toggled && "font-bold"
          }`}
        >
          Front End
        </p>
        <label
          htmlFor="check"
          className="bg-darkGray w-20 h-10 rounded-full relative cursor-pointer"
        >
          <input
            className="sr-only peer"
            id="check"
            type="checkbox"
            onChange={(event) => {
              setToggled(event.target.checked);
            }}
          />
          <span className="w-2/5 h-4/5 bg-lightBlue absolute rounded-full left-1 top-1 peer-checked:bg-darkBlue peer-checked:left-11 transition-all duration-500"></span>
        </label>
        <p
          className={`ml-6 my-auto text-lg font-body transition-all duration-500 ${
            toggled && "font-bold"
          }`}
        >
          Emails
        </p>
      </div>
      {toggled ? <EmailProjects /> : <FEProjects />}
    </section>
  );
};

export default Projects;
