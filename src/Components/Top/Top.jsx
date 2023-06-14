import React, { useEffect } from "react";
import { motion } from "framer-motion";
import womenImg from '../../images/womenImg.svg'
import { MdWavingHand } from "react-icons/md";
import { fadeIn } from 'react-animations'
import styled  from 'styled-components'
import Aos from "aos";
import "aos/dist/aos.css";
import Nav from "./Nav";
import Quotes from "./Quotes";
const Top = () => {
  const name = ["B", "E", "N", "E", "D", "I", "C", "T"];
   useEffect(() => {
     Aos.init({ duration: 1000 });
   }, []);
  return (
    <>
      <Nav />
      <main className="Top_main bg-slate-500">
        <section className="intro" data-aos="fade-right">
          <h1 className="">
            Hi <MdWavingHand className="wave_animation" /> I'm
            <span className="name">
              {name.map((text, index) => {
                return (
                  <span key={index} className="each_letter">
                    {text}
                  </span>
                );
              })}
            </span>
          </h1>
          <br />
          <h1 className="frontend ">Frontend web developer </h1>
          <blockquote>
            <Quotes/>
            {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sed
            velit ipsum libero consectetur mollitia rem maxime quam porro
            aliquam. */}
          </blockquote>

          <div className="top_btn_container">
            <button
              data-aos="flip-up"
              data-aos-duration="3000"
              type="button"
              className="top_btn contact animate__shakeY "
            >
              Download Resume
            </button>
            <button
              type="button "
              className="contact   "
              // data-aos="flip-down"
              // data-aos-duration="3000"
            >
              Contact developer{" "}
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
            className="shape-fill"
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
            className="shape-fill"
          ></path>
        </svg>
      </div>
  
    </>
  );

};


// const bounceAnimation = keyframes`${}`;
const Wrapper = styled.button`
  animation: 1s ${fadeIn};
`;

export default Top;