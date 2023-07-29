import React from "react";
import { FaHtml5, FaReact, FaFigma } from "react-icons/fa";
import { BsFiletypeCss } from "react-icons/bs";
import { SiJavascript, SiRedux, SiFirebase } from "react-icons/si";
import Me from "./../images/my_image_2.jpg";

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
    <main className="about_container" id="about">
      <h1 className="about">About Me </h1>
      <section className="about_Me">
        <img src={Me} alt="" />
        <div>
          <p>
            Hey there! I'm Benedict Nnaoma, a passionate Frontend developer with
            2+ years of experience. I create visually stunning and user-friendly
            digital experiences. I blend aesthetics with functionality to bring
            visions to life. I've developed e-commerce platforms, responsive
            websites, and intuitive interfaces for web applications. When I'm
            not designing, I enjoy playing chess and reading self development
            books. Let's collaborate! Reach out to me at
            <a href="https://benedictnnaoma0@gmail.com" target="_blank">
              benedictnnaoma0@gmail.com
            </a>{" "}
            or through the <a href="#contact">contact form below</a>. Together,
            we'll create something exceptional.
          </p>
        </div>
      </section>

      <div className="Stack_container">
        <h2>Tech Stack</h2>
        <div className="Stack_contain">
          {/*  */}
          {teach.map(({ logo, text }) => {
            return (
              <span className="stack" key={text}>
                {logo} <span>{text}</span>
              </span>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default About;
