import React, { useEffect, useState } from "react";
import gitHub from "../images/gitHub.png";
import coctail from "../images/coctail.png";
import sparrow_Screenshot from "../images/sparrow_Screenshot.png";
import hackerNews_Screenshot from "../images/hackerNews_Screenshot.png";
import Bootstrap_Screenshot from "../images/Bootstrap_Screenshot.png";
import hydrapage_Screenshot from "../images/hydrapage_Screenshot .png";
import jobStore from "../images/jobStore.png";
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
      title: "Sparrow Networkx",
      subtitle:
        " Welcome to our Sparrow Networkx e-commerce web app, where style and convenience meet to transform your living spaces! Discover an extensive collection of meticulously curated furniture pieces that cater to your unique tastes and needs. With our user-friendly interface and seamless browsing experience, furnishing your dream home has never been easier.",
      link: "https://sparrow-networkx.netlify.app",
      points1:
        "Extensive Product Catalog: Our app boasts an extensive product catalog, featuring a diverse range of furniture's to cater to every lifestyle and interest.",
      point2:
        "User-Friendly Interface: Enjoy a seamless and intuitive browsing experience, with a clean and user-friendly interface that makes navigation effortless.",
      point3:
        "Advanced Search and Filtering: Utilize powerful search and filtering options to quickly find the perfect furniture item based on your specific criteria, such as size, color, material, and price range.",
      point4:
        "Responsive Design: Enjoy a consistent and optimal shopping experience across various devices, including desktops, tablets, and smartphones.",
      point5: "most forked repos",
    },
    {
      id: 1,
      image: gitHub,
      title: "Git Hub search Info ",
      subtitle:
        "GitHub Insight is a powerful web application designed to provide users with comprehensive insights into GitHub users and their repositories. Whether.",

      point1:
        "User Profile Analysis: Simply search for any GitHub user, and GitHub search info will fetch detailed information about their profile. From their bio and profile picture to their activities and followers.",

      point3:
        "Repository Overview: Explore the GitHub user's repositories with ease. GitHub Insight will list out all of their repositories along with crucial details such as the number of stars and forks",
      point4:
        "Stars Per Language: GitHub Insight provides a breakdown of the user's most starred repositories based on programming languages. This feature allows you to identify the languages that are most popular in the user's projects, giving you valuable knowledge about their preferred technologies.",
      point5:
        "Visual Representations: Numbers and data can be overwhelming. GitHub Insight makes it easier to grasp complex data by presenting it in clear and interactive visualizations. The app offers a visually appealing bar chart and pie chart that showcase the user's most used programming languages and their growth over time.",

      link: "https://github-search-info.netlify.app",
    },

    {
      id: 3,
      image: jobStore,
      title: "JobSter",
      subtitle: `JobTracker is a revolutionary web application designed to streamline and organize your job search process. Finding your dream job has never been easier, thanks to our feature-rich platform that allows you to effortlessly store and track all your job applications, interviews, offers, and rejections in one convenient place.`,
      point1:
        "Effortless Application Tracking: Say goodbye to scattered spreadsheets and notes. JobTracker lets you log all your job applications with essential details like company name, job title, application date, and more. With just a few clicks, you can add new applications or update existing ones.",
      point2:
        "Centralized Offer and Rejection Management: Receive an offer? Update your JobTracker profile and keep a record of all the exciting opportunities that come your way.",
      point3:
        "Visual Insights with Bar and Area Charts: JobTracker goes beyond mere data storage. Our interactive charts provide you with insightful visualizations of your job search progress. The bar chart displays the number of job applications made each month, giving you a clear overview of your activity levels over time. The area chart reveals trends and patterns in your job application history, helping you refine your strategy for success.",
      point4:
        "Smart Filters and Search: With an ever-increasing number of job applications, finding specific details can become overwhelming. Fear not! JobTrackr comes with smart filtering and search options that allow you to quickly locate any job application, interview, or other vital information.",

      link: "https://job-ster-app.netlify.app/",
    },
    {
      id: 4,
      image: coctail,
      title: "Cocktail db",
      subtitle:
        "The Cocktail DB is a web application that provides comprehensive information about various cocktails using the Cocktail API. It offers details on how to make any cocktail that is available and being searched for, ensuring users have access to valuable recipes and instructions.",
      point1:
        "Comprehensive Cocktail Database: Access an extensive collection of cocktails with detailed information.",
      point2:
        "Ingredient Lists: View complete ingredient lists for each drink, making it simple to gather all necessary items before starting your cocktail-making adventure.",
      point3:
        "Categorization: Easily browse and find cocktails based on categories such as type, flavor profile, spirit base, or popularity.",
      point4:
        "Mobile-Friendly: Enjoy a seamless experience on both desktop and mobile devices, ensuring you can access Cocktail db wherever you go.",
      point5:
        "Search Functionality: Quickly find specific cocktails by searching for their names or ingredients.",

      link: "https://cocktail-db-info.netlify.app",
    },
    {
      id: 5,
      image: hackerNews_Screenshot,
      title: "HackerNews",
      subtitle:
        "HackerNews is a dynamic news web application that provides comprehensive coverage on any topic you search for, ensuring the latest updates are readily accessible.",
      point1:
        "Comprehensive Coverage: Our platform offers comprehensive coverage on a wide range of topics, from technology and business to science, entertainment, and global events.",
      point2:
        "Intelligent Search: With an advanced search function, you can easily find articles and information on specific subjects, making it effortless to explore your interests.",
      point3:
        "Diverse Perspectives: HackerNews aggregates content from various sources to provide you with a well-rounded view of any given topic, including different perspectives and viewpoints.",
      point4:
        "User-Friendly Interface: The intuitive interface makes navigation a breeze, allowing you to quickly access the content you're looking for.",

      link: "https://hackernews1.netlify.app",
    },
    {
      id: 6,
      image: hydrapage_Screenshot,
      title: "Hydra Landing Page",
      subtitle: `Welcome to Hydra, the immersive gateway to unforgettable virtual reality experiences that transport you to extraordinary worlds `,
      point1:
        "Immersive VR Experiences: Welcome to Hydra offers a diverse selection of immersive virtual reality experiences that transport users to extraordinary worlds. From fantastical realms to futuristic galaxies, the platform caters to a wide range of interests and preferences.",
      point2:
        "Curated Content: The content library is carefully curated, offering a diverse selection of high-quality VR experiences. The platform caters to various tastes, skill levels, and interests, ensuring there's always something for everyone to enjoy.  ",
      point3:
        "Constant Updates: Regular content updates and platform improvements ensure that users always have fresh and exciting experiences to look forward to. Welcome to Hydra is committed to staying at the forefront of the VR landscape.",

      link: "https://hydra-vr-page.netlify.app",
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

      <div className="model">
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          {Project.map(
            ({ title, subtitle, point1, point2, point3, point4,point5, link, id }) => {
              if (id === idT) {
                return (
                  <article className="model" data-aos="fade-up">
                    <div className="close_flex">
                      <h2>{title}</h2>
                      <button
                        onClick={closeModal}
                        className="contact p_btn_red"
                      >
                        Close
                      </button>
                    </div>

                    <p>{subtitle}</p>

                    <h4> key Features :</h4>
                    <ul>
                      {point1 && <li>{point1}</li>}
                      {point2 && <li>{point2}</li>}
                      {point3 && <li>{point3}</li>}
                      {point4 && <li>{point4}</li>}
                      {point5 && <li>{point5}</li>}
                    </ul>

                    <a href={link} target="_blank">
                      <button className="contact">View Live Site</button>
                    </a>
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
