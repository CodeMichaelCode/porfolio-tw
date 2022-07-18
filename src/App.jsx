import { useState } from "react";
import AboutMe from "./component/AboutMe";
import ContactMe from "./component/ContactMe";
import Header from "./component/Header";
import Projects from "./component/Projects";
import Skills from "./component/Skills";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
