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
      subtitle:
        "Confy Sloth is an ongoing ecommerce project—an engaging web application designed for a furniture company. This ecommerce platform is built using React.js, leveraging its robust features and capabilities to provide an exceptional user experience for customers browsing and purchasing furniture products.",
      link: "https://sparrow-networkx.netlify.app",
    },
    {
      id: 1,
      image: gitHub,
      title: "Git Hub search Info ",
      subtitle:
        "GitHub Search Info is a GitHub analytics web application that provides valuable insights on searched GitHub users. It offers in-depth analysis and data about the searched GitHub user, allowing users to gain a better understanding of their activities, repositories, and contributions within the GitHub ecosystem.",
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
      subtitle:
        "The Cocktail DB is a web application that provides comprehensive information about various cocktails using the Cocktail API. It offers details on how to make any cocktail that is available and being searched for, ensuring users have access to valuable recipes and instructions.",
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
      subtitle:
        "HackerNews is a dynamic news web application that provides comprehensive coverage on any topic you search for, ensuring the latest updates are readily accessible.",
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
      point2: "Gives use cases for VR's  ",
      point3: "Sign up and Contact forms ",

      link: "https://hydra-vr-page.netlify.app",
    },
    {
      id: 5,
      image: Bootstrap_Screenshot,
      title: "Bootstrap Landing Page",
      subtitle:
        "The Bootstrap Landing Page is an aesthetically pleasing design specifically crafted for an educational landing page. This page is exclusively built using Bootstrap, showcasing my proficient skills in utilizing the Bootstrap framework.",
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
