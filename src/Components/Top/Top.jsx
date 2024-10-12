import React, { useEffect } from "react";
import womenImg from "../../images/New_me4.png";
import { MdWavingHand } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "./Nav";
import { aniQuotes } from "./Quotes";
import Resume from "../../images/Resume.pdf";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
const Top = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Nav />
      <main className="Top_main">
        <section className="intro" data-aos="fade-right">
          <h1 className="">
            Hi <MdWavingHand className="wave_animation" /> I'm
            <span className="name">
              <span> </span>
              <span className="each_letter">Benedict Nnaoma</span>
            </span>
          </h1>
          <br />
          <h1 className="frontend ">A Full Stackweb developer </h1>
          <blockquote>{aniQuotes()}</blockquote>

          <div className="top_btn_container b-container">
            <button type="button" className="top_btn contact  animate__shakeY ">
              <a href={Resume} download={"Benedict-Nnaoma.pdf"}>
                Download Resume
              </a>
            </button>
            <button type="button " className="contact   ">
              <RiTwitterXFill />
              <FaGithub />
              <IoLogoLinkedin />

            </button>
          </div>
        </section>

        <section data-aos="fade-left">
          <img src={womenImg} alt="" className="top_image" />
        </section>
      </main>
      <div className="custom-shape-divider-bottom-1686522821">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill top_svg"
          ></path>
        </svg>
      </div>

      <div className="custom-shape-divider-bottom-1686523959">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill top_svg"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Top;
