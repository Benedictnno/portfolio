import { useEffect, useState, createContext } from "react";
import { motion, useScroll } from "framer-motion";
import Top from "./Components/Top/Top";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Buttom from "./Components/Buttom/Buttom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Services from "./Components/Services";
export const Appcomponet = createContext();

function App() {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <Appcomponet.Provider value={{ open, setOpen }}>
      <main className="app">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Top />
        <About />
        <hr />
        <Services />
        <Projects />
        <Buttom />
        <ToastContainer position="bottom-left"/>
      </main>
    </Appcomponet.Provider>
  );
}

export default App;
