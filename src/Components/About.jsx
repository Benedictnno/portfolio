import React from "react";
import womenImg from "./../images/womenImg.svg";
import { FaHtml5, FaReact, FaFigma } from "react-icons/fa";
import { BsFiletypeCss } from "react-icons/bs";
import { SiJavascript, SiRedux, SiFirebase } from "react-icons/si";

const About = () => {
  const teach = [
    {
      logo: <FaHtml5 />,
      text: "HTML",
    },
    {
      logo: <BsFiletypeCss />,
      text: "CSS",
    },

    {
      logo: <SiJavascript />,
      text: "JavaScript",
    },
    {
      logo: <FaReact />,
      text: "React Js",
    },
    {
      logo: <SiRedux />,
      text: "React Redux",
    },
    {
      logo: <FaFigma />,
      text: "figma",
    },
    {
      logo: <SiFirebase />,
      text: "Firebase",
    },
  ];
  return (
    <main className="">
      <h1 className="about">About Me </h1>
      <section className="about_Me">
        <img src={womenImg} alt="" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            ipsum veritatis rem, ad molestias odio. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Corporis, distinctio?
          </p>
          <div>
            <h2>Tech Stack</h2>
            <div>
              {teach.map(({ logo, text }) => {
                return (
                  <span className="stack" key={text}>
                    {logo} <span>{text}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
