import React, { useContext } from "react";
import styled from "styled-components";
import { LuDot } from "react-icons/lu";
import { FiArrowUpRight } from "react-icons/fi";
import { Appcomponet } from "../../App";
const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  align-items: center;
  color: #fff;
  // margin-left: 10rem;
  z-index: 2;

  li {
    padding: 0.75rem;
    cursor: pointer;
  }

  li > a {
    color: var(--main-color1);
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d253b;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 320px;
    // padding-top: 3.5rem;
    // padding-buttom: -3.5rem;
    transition: transform 0.3s ease-in-out;
    justify-content: center;
    overflow-y: hidden;
    align-items: center;

    li > a {
      color: #fff;
    }
  }
  

  //   .mid-nav {
  //     display: flex;
  //   }
`;

const RightNav = () => {
  const { open, setOpen } = useContext(Appcomponet);
  return (
    <Ul open={open} className="nav_bar">
      {/* <ul > */}

      <nav className="nav">
        <div className="large_screen">
          <a href="/" className="logo_text">
            Benedict's Portfolio
          </a>

          <div className=" large_screen2">
            <a href="#project" className="">
              Projects
            </a>
            <a href="#skill">Skill Set</a>
            <a href="#about">About me</a>
            {/* <div className=" ">
            <p>Download eeffffffvResume</p>
            {/* <FaGithub size={25} /> */}
            {/* <p>menu</p> *
          </div> */}
          </div>

          <a href="#contact" className="contact_Top">
            {/* <LuDot color="#fff" size={40} /> */}
            <span>Contact Developer</span>
            <FiArrowUpRight />
          </a>
        </div>
      </nav>

      {/* small screens */}
      <ul className="small_screen">
        <div className="">
          <a to={"/"} className=" ">
            Nnaoma Benedict
          </a>
          {/* <IoIosMenu /> */}
        </div>
        <li>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
        </li>

        <li>
          <a href="#project" onClick={() => setOpen(false)}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact Developer
          </a>
        </li>
      </ul>
    </Ul>
  );
};

export default RightNav;
