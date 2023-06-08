import React, { useEffect } from "react";
import { motion } from "framer-motion";
import womenImg from '../../images/womenImg.svg'
import { MdWavingHand } from "react-icons/md";
import { fadeIn } from 'react-animations'
import styled  from 'styled-components'
import Aos from "aos";
import "aos/dist/aos.css";

const Top = () => {
  const name = ["B", "E", "N", "E", "D", "I", "C", "T"];
   useEffect(() => {
     Aos.init({ duration: 1000 });
   }, []);
  return (
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus sed
          velit ipsum libero consectetur mollitia rem maxime quam porro aliquam.
        </blockquote>

        <div className="top_btn_container">
          <button
            data-aos="flip-up"
            data-aos-duration="3000"
            type="button"
            className="top_btn animate__shakeY "
          >
            Download Resume
          </button>
          <button
            type="button "
            className="contact   "
            data-aos="flip-down"
            data-aos-duration="3000"
          >
            Contact developer{" "}
          </button>
        </div>
      </section>

      <section data-aos="fade-left">
        <img src={womenImg} alt="" className="top_image" />
      </section>
    </main>
  );

};


// const bounceAnimation = keyframes`${}`;
const Wrapper = styled.button`
  animation: 1s ${fadeIn};
`;

export default Top;