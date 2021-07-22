import React, { useState } from "react";
import { Nav, Hamburger, Menu, MenuLink, span } from "./Navbar.style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <Nav>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          about
        </MenuLink>
        <MenuLink
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          projects
        </MenuLink>
        <MenuLink
          to="skillset"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          skillset
        </MenuLink>
        <MenuLink
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          contact
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
