import React from "react";
import { GiWebSpit } from "react-icons/gi";
import { SiReact, SiFirebase } from "react-icons/si";
import { FaReact } from "react-icons/fa";
// import { styles } from "styled-components";

const Services = () => {
  const data = [
    {
      title: "Web scrapping with Puppeteer",
      text: "Puppeteer web scraping showcases automation and data extraction skills. As a web developer, I've successfully gathered valuable information from diverse websites.",
      icon: <GiWebSpit />,
    },
    {
      title: "Frontend Web development ",
      text: "I specialize in frontend web development with React.js. Utilizing this powerful JavaScript library, I create engaging and dynamic user interfaces for diverse web applications. My expertise in HTML, CSS, and JavaScript enables me to bring creative and functional designs to life using React.js.",
      icon: <FaReact />,
    },
    {
      title: "Backend with Firebase",
      text: "As an experienced Frontend Web Developer, I use Firebase to build robust and scalable web applications. It's a powerful cloud-based platform that streamlines development, enabling me to focus on creating innovative features.",
      icon: <SiFirebase />,
    },
  ];
  return (
    <section className="services">
      <h1>Services</h1>
      <article className="services_container">
        {data.map(({ title, text, icon }, index) => {
          return (
            <div
              className={
                index === 1 ? "mid_service g_service" : "service g_service"
              }
              key={index}
            >
              <h1 className={index === 2 ? "Fire_Icon" : ""}>{icon || ""}</h1>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

// const Wrapper = styles.section`

// `;
export default Services;
