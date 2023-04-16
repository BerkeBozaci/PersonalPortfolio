import React from "react";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";
import "./App.css";
import Intro from "./Intro/Intro";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Carousel from "./Projects/Projects";
import Experiences from "./Experiences/Experiences";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Carousel />
      <Experiences />
    </div>
  );
}

export default App;
