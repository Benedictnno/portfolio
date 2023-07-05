import React, { useEffect, useState } from "react";
import gitHub from "../images/gitHub.png";
import coctail from "../images/coctail.png";
import sparrow_Screenshot from "../images/sparrow_Screenshot.png";
import hackerNews_Screenshot from "../images/hackerNews_Screenshot.png";
import Bootstrap_Screenshot from "../images/Bootstrap_Screenshot.png";
import hydrapage_Screenshot from "../images/hydrapage_Screenshot .png";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "react-modal";

const Projects = () => {
  const [idT, setId] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const Project = [
    {
      id: 0,
      image: sparrow_Screenshot,
      title: "Comfy Sloth",
      subtitle: ` Confy Sloth is an ecommerce project which is currently on going .\n It's an ecommerce web application for a funiture company which is built on React js`,
      link: "https://sparrow-networkx.netlify.app",
    },
    {
      id: 1,
      image: gitHub,
      title: "Git Hub search Info ",
      subtitle: `Git hub search info is a git hub analitics web app which gives insite on the seached git hub user `,
      points1: "Lists out user's followers",
      point2: "Gives insite on languages being used by the git hub",
      point3: "most popular repos",
      point4: "stars per language",
      point5: "most forked repos",

      link: "https://github-search-info.netlify.app",
    },
    {
      id: 2,
      image: coctail,
      title: "Cocktail db",
      subtitle: `cocktail db is a web application that gives infomation about diffirent coctails \n using the cocktail api it give's info on how to make any available cocktail being searched `,
      point1: "info about your favourite drinks",
      point2: "gives detailed instructions on how to make a different drinks ",
      point3: "listes out ingredience needed to make each drink",
      point4: "Categorizes each drink",

      link: "https://cocktail-db-info.netlify.app",
    },
    {
      id: 3,
      image: hackerNews_Screenshot,
      title: "HackerNews",
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
      title: "Hydra Landing Page",
      subtitle: `Welcome to Hydra, the immersive gateway to unforgettable virtual reality experiences that transport you to extraordinary worlds `,
      point1: "Landing page for a virtual reality company",
      point2: "gives detailed instructions on how to make a different drinks ",
      point3: "listes out ingredience needed to make each drink",
      point4: "Categorizes each drink",

      link: "https://hydra-vr-page.netlify.app",
    },
    {
      id: 5,
      image: Bootstrap_Screenshot,
      title: "Bootstrap Landing Page",
      subtitle: `Bootstrap Landding Page is 
      a visually appealing design for an educational 
      landing page. This landing page was buildth solely 
      using Bootstap , there show casing my skill in using
       the Bootstarp framework `,
      // point1: "info about your favourite drinks",
      // point2: "gives detailed instructions on how to make a different drinks ",
      // point3: "listes out ingredience needed to make each drink",
      // point4: "Categorizes each drink",

      link: "https://bootstrap-tut.netlify.app",
    },
  ];

  return (
    <main className="Project" id="project">
      <h1 className="">Projects</h1>
      <section>
        <article className="project_container">
          {Project.map(({ image, title, id }) => {
            return (
              <div className="mainp_container " data-aos="fade-up" key={id}>
                <img src={image} alt={title} data-aos="zoom-in" />
                <div className="btn_container">
                  <h3>{title}</h3>
                  <button
                    onClick={() => {
                      setId(id), openModal();
                    }}
                    className="p_btn"
                  >
                    More Details
                  </button>
                </div>
              </div>
            );
          })}
        </article>
      </section>

      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          {Project.map(
            ({ title, subtitle, point1, point2, point3, point4, link, id }) => {
              if (id === idT) {
                return (
                  <article className="" data-aos="fade-up">
                    <h2>{title}</h2>

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
                    <button onClick={closeModal} className="contact p_btn_red">
                      Close
                    </button>
                  </article>
                );
              }
            }
          )}
        </Modal>
      </div>
    </main>
  );
};

export default Projects;
