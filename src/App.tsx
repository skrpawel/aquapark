import { useState } from "react";
import reactLogo from "./assets/react.svg";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import OpenHours from "./Components/OpenHours";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <OpenHours />
      <Contact />
    </div>
  );
}

export default App;
