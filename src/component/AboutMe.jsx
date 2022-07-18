import React from "react";

const AboutMe = () => {
  return (
    <section className="grid xl:grid-cols-2">
      <div className="flex px-10 mb-0 bg-darkBlue py-0 2xl:px-[20%] xl:order-2">
        <img
          className="justify-self-center self-end w-[510px] mx-auto"
          src="https://codemichaelcode.s3.amazonaws.com/headshot-no-bg.png"
          alt="Michael Olawunmi"
        />
      </div>
      <div className="py-10 px-14 bg-lightBlue text-center xl:text-left 2xl:px-[20%] xl:order-1">
        <h1 className="text-white uppercase leading-[1.1] font-headers text-[4.5rem] 2xl:mt-10 2xl:text-[6.5rem]">
          <span className="text-[5.5rem] 2xl:text-[8rem]">Michael</span>
          <br /> Olawunmi
        </h1>
        <p className="my-5 text-white text-xl font-light font-body">
          // About Me
        </p>
        <p className="text-white text-lg font-light font-body mx-auto max-w-[650px] 2xl:mb-10">
          I’m a proud software engineer. By nature, I’m a problem solver, and
          due to my experience as an EMT, I excel at keeping a level head which
          has helped me on my journey. A passion of mine is volunteering in tech
          spaces to help create communities for people at all levels.
          Volunteering has allowed me to learn so much from my peers while
          giving back at the same&nbsp;time.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
