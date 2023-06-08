import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Top from "./Components/Top/Top";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Top/Buttom/Contact";
import axios from "axios";
function App() {
  const { scrollYProgress } = useScroll();
const options = {
  method: "GET",
  url: "https://api.sellercenter.net/",
  params: { Action: "FeedList", Format: "JSON" },
  headers: { accept: "application/JSON" },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
  return (
    <main className="app">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Top />
      <hr />
      <About />
      <hr />
      <Projects />
      <Contact/>
    </main>
  );
}

export default App;
