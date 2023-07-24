import React from "react";
import { GiWebSpit } from "react-icons/gi";
import { SiReact, SiFirebase } from "react-icons/si";
// import { styles } from "styled-components";

const Services = () => {
  const data = [
    { title: "Web scrapping", text: "", icon: <GiWebSpit /> },
    { title: "Frontend Web development ", text: "", icon: <SiReact /> },
    { title: "Backend with Firebase", text: "", icon: <SiFirebase /> },
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
            >
              <h1 className={index === 2 ? "Fire_Icon" : ""}>{icon}</h1>
              <h2>{title}</h2>
              <hr />
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
