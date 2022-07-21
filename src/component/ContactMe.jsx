import React from "react";
import {
  FaArrowRight,
  FaGithubAlt,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const ContactMe = () => {
  return (
    <section className="bg-darkGray" id="contact">
      <div className=" container mx-auto pt-20 pb-10 xl:py-20 px-5 md:px-10 grid xl:gap-6 xl:grid-cols-2">
        <div className="my-5 lg:px-14 xl:px-0">
          <h3 className="text-5xl md:text-8xl font-headers mb-7 text-white">
            Let's <FaArrowRight className="inline-block text-slate-200" />
            <br /> Connect.
          </h3>
          <p className="text-lg font-body mb-7 text-white xl:w-[90%]">
            Michael Olawunmi is a professional developer whos open for new
            projects and freelancing. Feel free to reach out.
          </p>
          {/* <h3 className="text-3xl font-headers mb-2">Socials</h3> */}
          <ul>
            <li className="text-2xl inline-block border-2 border-white rounded-full p-1.5 mr-4 bg-white duration-200 ease hover:bg-transparent hover:text-white">
              <a
                href="https://www.linkedin.com/in/molawunmi/"
                target={"_blank"}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="text-2xl inline-block border-2 border-white rounded-full p-1.5 mr-4 bg-white duration-200 ease hover:bg-transparent hover:text-white">
              <a href="https://github.com/CodeMichaelCode" target={"_blank"}>
                <FaGithubAlt />
              </a>
            </li>
            <li className="text-2xl inline-block border-2 border-white rounded-full p-1.5 mr-4 bg-white duration-200 ease hover:bg-transparent hover:text-white">
              <a href="https://twitter.com/UrBuddyMichael" target={"_blank"}>
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="my-5 lg:px-14 xl:px-0">
          <form name="contact-form" method="POST">
            <input type="hidden" name="form-name" value="contact-form" />
            <label className="mb-1 block capitalize font-body text-xl text-white">
              Your name:
            </label>
            <input
              type="text"
              name="fullname"
              className="p-2 block w-full mb-4 bg-white focus:bg-slate-200 focus:outline-none border-solid border-darkGray border-b-2"
            />
            <label className="mb-1 block capitalize font-body text-xl text-white">
              Your email address:
            </label>
            <input
              type="email"
              name="email"
              className="p-2 block w-full mb-4 bg-white focus:bg-slate-200 focus:outline-none border-solid border-darkGray border-b-2"
            />
            <label className="mb-1 block capitalize font-body text-xl text-white">
              Your message:
            </label>
            <textarea
              name="message"
              className="p-2 block w-full mb-4 bg-white focus:bg-slate-200 focus:outline-none border-solid border-darkGray border-b-2 min-h-[250px]"
            ></textarea>
            <button
              type="submit"
              className="text-xl w-fit py-3 px-4 cursor-pointer font-body bg-white rounded-3xl shadow-lg no-underline hover:scale-105 hover:bg-slate-200"
            >
              Send <FaArrowRight className="inline-block text-darkBlue" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
