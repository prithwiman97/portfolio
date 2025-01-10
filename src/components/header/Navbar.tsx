import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { HamburgerMenu, MenuItem } from "./HamburgerMenu";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const menuItems: MenuItem[] = [
    { label: "Projects", icon: <FontAwesomeIcon icon={faFolderOpen} /> },
    {
      label: "LinkedIn",
      icon: <FontAwesomeIcon icon={faLinkedin} />,
      href: "https://www.linkedin.com/in/prithwiman-mazumdar/",
    },
  ];
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Portfolio</h1>
      <HamburgerMenu items={menuItems} />
    </nav>
  );
};
