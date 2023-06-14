import { useEffect, useState,createContext } from "react";
import { motion, useScroll } from "framer-motion";
import Top from "./Components/Top/Top";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Buttom from "./Components/Buttom/Buttom";
export const Appcomponet = createContext();

function App() {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);
 
  return (
    <Appcomponet.Provider
      value={{  open, setOpen }}
    >
      <main className="app">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Top />
        {/* <hr /> */}
        <About />
        <hr />
        <Projects />
        <Buttom />
      </main>
    </Appcomponet.Provider>
  );
}

export default App;
