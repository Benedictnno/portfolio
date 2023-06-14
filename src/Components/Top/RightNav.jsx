import React, { useContext } from "react";
import styled from "styled-components";
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

 li> a {
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

    li> a {
      color: #fff;
    }
  }

  //   .mid-nav {
  //     display: flex;
  //   }
`;
const RightNav = () => {
  const {  open, setOpen } = useContext(Appcomponet);
  return (
    <Ul open={open} className="nav_bar">
      {/* <ul > */}

      <li>
        <a href="#about" onClick={()=>setOpen(false)}>About</a>
      </li>
      <li>
        <a href="#project" onClick={()=>setOpen(false)}>Projects</a>
      </li>

      <li>
        <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
      </li>
      {/* </ul> */}
    </Ul>
  );
};

export default RightNav;
