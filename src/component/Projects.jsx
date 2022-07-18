import React from "react";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="bg-slate-100" id="projects">
      <div className="container mx-auto py-20 px-5 md:px-10">
        <h2 className="text-5xl uppercase text-center font-headers mb-14 underline decoration-dotted decoration-darkBlue decoration-6">
          Projects
        </h2>
        <article className="grid my-10 items-center xl:gap-6 xl:grid-cols-2">
          <div className="m-5 lg:px-14 xl:px-0 xl:order-2">
            <div className="bg-black max-w-[700px] w-full mx-auto">
              <a
                href="https://recipebookmark.netlify.app/"
                target={"_blank"}
                className="relative"
              >
                <img
                  className="max-w-[700px] w-full ease-linear duration-200 relative -translate-y-6 -translate-x-6"
                  src="https://recipe-bookmarks.s3.amazonaws.com/recipebookmarksnapshot.jpg"
                  alt="RecipeBookMark"
                />
              </a>
            </div>
          </div>
          <div className="my-10 align-items-center xl:px-0 xl:mr-5 xl:order-1">
            <h3 className="text-3xl uppercase font-headers mb-5">
              RecipeBookmark
            </h3>
            <p className="text-lg font-body mb-5 xl:w-[90%]">
              RecipeBookMark is a site that records a user's favorite recipes in
              short snapshots. It uses a DB for user validation and JWT for
              authorization to keep track of users. RecipeBookmark takes
              advantage of this by assigning posts to users. Each recipe card
              provides more information than a traditional bookmark would.
            </p>
            <p className="text-lg font-body mb-7 xl:w-[90%] italic">
              - React, Node.js, Express.js, MongoDB, Javascript, Styled
              Components, and&nbsp;JWTs.
            </p>
            <div className="flex gap-2 md:gap-6">
              <a
                href="https://recipebookmark.netlify.app/"
                className="md:text-lg bg-lightBlue text-white rounded-3xl py-3 px-3 md:px-6 cursor-pointer shadow-lg no-underline hover:bg-darkBlue"
              >
                <FaExternalLinkAlt className="inline-block align-baseline mr-1" />{" "}
                View Project
              </a>
              <a
                href="https://github.com/CodeMichaelCode/mern-recipe-site"
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
                href="https://toms-tavern-trove.netlify.app/"
                target={"_blank"}
                className="relative"
              >
                <img
                  className="max-w-[700px] w-full ease-linear duration-200 relative -translate-y-6 -translate-x-6"
                  src="https://d33wubrfki0l68.cloudfront.net/509b692804df5597894c0fa236933eefbf08423e/7c399/images/breweryappresized.jpg"
                  alt="Tom's Tavern Trove"
                />
              </a>
            </div>
          </div>
          <div className="my-10 align-items-center xl:px-0 xl:mr-5">
            <h3 className="text-3xl uppercase font-headers mb-5">
              Tom's Tavern Trove
            </h3>
            <p className="text-lg font-body mb-5 xl:w-[90%]">
              Tom's Tavern Trove is an app that allows users to search for local
              breweries. I had a lot of fun building this app because it allowed
              me to manipulate an extensive database and learn more about my
              local breweries.
            </p>
            <p className="text-lg font-body mb-7 xl:w-[90%] italic">
              - Javascript, CSS, HTML, and
              <span className="whitespace-nowrap"> Web Based API.</span>
            </p>
            <div className="flex gap-2 md:gap-6">
              <a
                href="https://toms-tavern-trove.netlify.app/"
                className="md:text-lg bg-lightBlue text-white rounded-3xl py-3 px-3 md:px-6 cursor-pointer shadow-lg no-underline hover:bg-darkBlue"
              >
                <FaExternalLinkAlt className="inline-block align-baseline mr-1" />{" "}
                View Project
              </a>
              <a
                href="https://github.com/CodeMichaelCode/LocalBrewApiProject"
                className="md:text-lg bg-lightBlue text-white rounded-3xl py-3 px-3 md:px-6 cursor-pointer shadow-lg no-underline hover:bg-darkBlue"
              >
                <FaGithubSquare className="inline-block text-2xl align-text-bottom mr-1" />{" "}
                View Code
              </a>
            </div>
          </div>
        </article>
        <article className="grid mt-10 mb-0 md:my-10 items-center xl:gap-6 xl:grid-cols-2">
          <div className="m-5 lg:px-14 xl:px-0 xl:order-2">
            <div className="bg-black max-w-[700px] w-full mx-auto">
              <a
                href="https://plastic-money-bank.netlify.app/"
                target={"_blank"}
                className="relative"
              >
                <img
                  className="max-w-[700px] w-full ease-linear duration-200 relative -translate-y-6 -translate-x-6"
                  src="https://d33wubrfki0l68.cloudfront.net/76438b1eb54e4720e0bff79ec1b9c078b69dfa07/7c241/images/bankinglpresized.jpg"
                  alt="Tom's Tavern Trove"
                />
              </a>
            </div>
          </div>
          <div className="my-10 align-items-center xl:px-0 xl:mr-5 xl:order-1">
            <h3 className="text-3xl uppercase font-headers mb-5">
              Plastic Money Bank
            </h3>
            <p className="text-lg font-body mb-5 xl:w-[90%]">
              Plastic Money Bank is an LP I designed and built. It's a bank that
              offers a competitive interest rate and a one-time durable card.
              The goal of this bank is to save the world one plastic card at a
              time.
            </p>
            <p className="text-lg font-body mb-7 xl:w-[90%] italic">
              - Javascript, CSS, and HTML.
            </p>
            <div className="flex gap-2 md:gap-6">
              <a
                href="https://plastic-money-bank.netlify.app/"
                className="md:text-lg bg-lightBlue text-white rounded-3xl py-3 px-3 md:px-6 cursor-pointer shadow-lg no-underline hover:bg-darkBlue"
              >
                <FaExternalLinkAlt className="inline-block align-baseline mr-1" />{" "}
                View Project
              </a>
              <a
                href="https://github.com/CodeMichaelCode/Banking-LP"
                className="md:text-lg bg-lightBlue text-white rounded-3xl py-3 px-3 md:px-6 cursor-pointer shadow-lg no-underline hover:bg-darkBlue"
              >
                <FaGithubSquare className="inline-block text-2xl align-text-bottom mr-1" />{" "}
                View Code
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
