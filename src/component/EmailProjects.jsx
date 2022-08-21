import React from "react";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";

const FEProjects = () => {
  return (
    <div className="container mx-auto px-5 md:px-10">
      <article className="grid my-10 items-center xl:gap-6 xl:grid-cols-2">
        <div className="m-5 lg:px-14 xl:px-0 xl:order-2">
          <div className="bg-black max-w-[700px] w-full mx-auto">
            <a
              href="https://freshwaterhikes.netlify.app/"
              target={"_blank"}
              className="relative"
            >
              <img
                className="max-w-[700px] w-full ease-linear duration-200 relative -translate-y-6 -translate-x-6 max-h-[360px]"
                src="https://html-emails-photos.s3.amazonaws.com/hiking.jpg"
                alt="hiking"
              />
            </a>
          </div>
        </div>
        <div className="my-10 align-items-center xl:px-0 xl:mr-5 xl:order-1">
          <h3 className="text-3xl uppercase font-headers mb-5">
            Fresh Water Hikes Email
          </h3>
          <p className="text-lg font-body mb-5 xl:w-[90%]">
            Fresh Water Hikes is a fictional company that provides a hiking tour
            service. This is a fully responsive HTML email. This email has been
            tested on Email On Acid and Litmus for compatibility across email
            clients.
          </p>
          <p className="text-lg font-body mb-7 xl:w-[90%] italic">
            - HTML, CSS, and VML
          </p>
          <div className="flex gap-2 md:gap-6">
            <a
              href="https://freshwaterhikes.netlify.app/"
              className="md:text-lg bg-lightBlue text-white rounded-3xl py-3 px-3 md:px-6 cursor-pointer shadow-lg no-underline hover:bg-darkBlue"
            >
              <FaExternalLinkAlt className="inline-block align-baseline mr-1" />{" "}
              View Project
            </a>
            <a
              href="https://github.com/CodeMichaelCode/hiking-email"
              className="md:text-lg bg-lightBlue text-white rounded-3xl py-3 px-3 md:px-6 cursor-pointer shadow-lg no-underline hover:bg-darkBlue"
            >
              <FaGithubSquare className="inline-block text-2xl align-text-bottom mr-1" />{" "}
              View Code
            </a>
          </div>
        </div>
      </article>
      <article className="grid my-10 items-center xl:gap-6 xl:grid-cols-2">
        <div className="m-5 lg:px-14 xl:px-0 ">
          <div className="bg-black max-w-[700px] w-full mx-auto">
            <a
              href="https://runnersrun.netlify.app/"
              target={"_blank"}
              className="relative"
            >
              <img
                className="max-w-[700px] w-full ease-linear duration-200 relative -translate-y-6 -translate-x-6 max-h-[360px]"
                src="https://html-emails-photos.s3.amazonaws.com/marathon.jpg"
                alt="Marathon"
              />
            </a>
          </div>
        </div>
        <div className="my-10 align-items-center xl:px-0 xl:mr-5">
          <h3 className="text-3xl uppercase font-headers mb-5">
            Runners Run Email
          </h3>
          <p className="text-lg font-body mb-5 xl:w-[90%]">
            Runners Run is a fictional company that provides a the lastest
            runner related news. This is a fully responsive HTML email. This
            email has been tested on Email On Acid and Litmus for compatibility
            across email clients.
          </p>
          <p className="text-lg font-body mb-7 xl:w-[90%] italic">
            - HTML, CSS, and VML
          </p>
          <div className="flex gap-2 md:gap-6">
            <a
              href="https://runnersrun.netlify.app/"
              className="md:text-lg bg-lightBlue text-white rounded-3xl py-3 px-3 md:px-6 cursor-pointer shadow-lg no-underline hover:bg-darkBlue"
            >
              <FaExternalLinkAlt className="inline-block align-baseline mr-1" />{" "}
              View Project
            </a>
            <a
              href="https://github.com/CodeMichaelCode/marathon-email"
              className="md:text-lg bg-lightBlue text-white rounded-3xl py-3 px-3 md:px-6 cursor-pointer shadow-lg no-underline hover:bg-darkBlue"
            >
              <FaGithubSquare className="inline-block text-2xl align-text-bottom mr-1" />{" "}
              View Code
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FEProjects;
