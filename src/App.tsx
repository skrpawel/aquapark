import { useState } from "react";
import reactLogo from "./assets/react.svg";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Navbar from "./Components/Navbar";
import OpenHours from "./Components/OpenHours";
import Prices from "./Components/Prices";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Gallery />
      <OpenHours />
      <Prices />
      <Contact />
    </div>
  );
}

export default App;
