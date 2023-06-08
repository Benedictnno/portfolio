import React, { useEffect, useRef, useState } from "react";
import gitHub from "../images/gitHub.png";
import coctail from "../images/coctail.png";
import ecommerce from "../images/ecommerceimg.png";
import hackerNews_Screenshot from "../images/hackerNews_Screenshot.png";
import Bootstrap_Screenshot from "../images/Bootstrap_Screenshot.png";
import hydrapage_Screenshot from "../images/hydrapage_Screenshot .png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MyVerticallyCenteredModal from "./Model";
import { AiOutlineClose } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import Model from "./Model";

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [idT, setId] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    Aos.init({duration:1000});
  }, []);
  const Project = [
    {
      id: 0,
      image: ecommerce,
      title: "Comfy Sloth",
      subtitle: ` Confy Sloth is an ecommerce project which is currently on going .\n It's an ecommerce web application for a funiture company which is built on React js`,
      link: "https://comfy-sloth-ecommerce-store.netlify.app",
    },
    {
      id: 1,
      image: gitHub,
      title: "Git Hub search Info ",
      subtitle: `Git hub search info is a git hub analitics web app which gives insite on the seached git hub user `,
      points1: "user's followers",
      point2: "languages being used",
      point3: "most popular repos",
      point4: "stars per language",
      point5: "most forked repos",

      link: "https://github-search-info.netlify.app",
    },
    {
      id: 2,
      image: coctail,
      title: "cocktail db",
      subtitle: `cocktail db is a web application that gives infomation about diffirent coctails \n using the cocktail api it give's info about any available cocktail being searched `,
      point1: "info about your favourite drinks",
      point2: "gives detailed instructions on how to make a different drinks ",
      point3: "listes out ingredience needed to make each drink",
      point4: "Categorizes each drink",

      link: "https://cocktail-db-info.netlify.app",
    },
    {
      id: 3,
      image: hackerNews_Screenshot,
      title: "cocktail db",
      subtitle: `cocktail db is a web application that gives infomation about diffirent coctails \n using the cocktail api it give's info about any available cocktail being searched `,
      point1: "info about your favourite drinks",
      point2: "gives detailed instructions on how to make a different drinks ",
      point3: "listes out ingredience needed to make each drink",
      point4: "Categorizes each drink",

      link: "https://hackernews1.netlify.app",
    },
    {
      id: 4,
      image: hydrapage_Screenshot,
      title: "cocktail db",
      subtitle: `cocktail db is a web application that gives infomation about diffirent coctails \n using the cocktail api it give's info about any available cocktail being searched `,
      point1: "info about your favourite drinks",
      point2: "gives detailed instructions on how to make a different drinks ",
      point3: "listes out ingredience needed to make each drink",
      point4: "Categorizes each drink",

      link: "https://hydralanding-page.netlify.app",
    },
    {
      id: 5,
      image: Bootstrap_Screenshot,
      title: "cocktail db",
      subtitle: `cocktail db is a web application that gives infomation about diffirent coctails \n using the cocktail api it give's info about any available cocktail being searched `,
      point1: "info about your favourite drinks",
      point2: "gives detailed instructions on how to make a different drinks ",
      point3: "listes out ingredience needed to make each drink",
      point4: "Categorizes each drink",

      link: "https://cocktail-db-info.netlify.app",
    },
  ];

  return (
    <main className="Project">
      <h1 className="">Projects</h1>
      <section>
        <h2>Main Projects </h2>

        <article className="project_container">
          {Project.map(({ image, title, id }) => {
            return (
              <div className="mainp_container " data-aos="fade-up" key={id}>
                <img src={image} alt={title} data-aos="zoom-in" />
                <div className="btn_container">
                  <h3>{title}</h3>
                  {/* <button
                    className="p_btn"
                    onClick={() => {
                      setOpen(true), setId(id);
                    }}
                  >
                    More Details
                  </button> */}

                  {/* <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                  </Button> */}
                </div>
              </div>
            );
          })}
        </article>
      </section>

      {/* {open && (
        <aside>
          {Project.map(
            ({ title, subtitle, point1, point2, point3, point4, link, id }) => {
              if (id === idT) {
                return (
                  <article className="pop_container" data-aos="fade-up">
                    <div className="inside_pop">
                      <span>{title}</span>
                      <button onClick={() => setOpen(false)}>
                        <AiOutlineClose />
                      </button>
                    </div>
                    <p>{subtitle}</p>
                    <ul>
                      {point1 && <li>{point1}</li>}
                      {point2 && <li>{point2}</li>}
                      {point3 && <li>{point3}</li>}
                      {point4 && <li>{point4}</li>}
                    </ul>
                    <a href={link} target="_blank">
                      <button className="contact">View Live Site</button>
                    </a>
                  </article>
                );
              }
            }
          )}
        </aside>
      )} */}

     

      <Model/>
    </main>
  );
};

export default Projects;
