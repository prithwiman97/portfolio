import React, { JSX, useState } from "react";
import { useDisplay } from "../../hooks/useDisplay";
import styles from "./HamburgerMenu.module.css";

export interface MenuItem {
  label: string;
  href?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

interface HamburgerMenuProps {
  items: MenuItem[];
}

export const HamburgerMenu = (props: HamburgerMenuProps) => {
  const { items } = props;
  const isMobile = useDisplay().isMobile;
  const [collapsed, setCollapsed] = useState(true);

  const onHamburgerClick = () => {
    setCollapsed((prev) => !prev);
  };

  const onCloseButtonClick = () => {
    setCollapsed(true);
  };

  return (
    <>
      {isMobile && (
        <button className={styles.hamburger} onClick={onHamburgerClick}>
          <span></span>
        </button>
      )}
      {((isMobile && !collapsed) || !isMobile) && (
        <ul
          className={
            isMobile ? styles.hamburgerMenuMobile : styles.hamburgerMenu
          }
        >
          {isMobile && (
            <li key="close-btn" className={styles.menuClose}>
              <button
                className={styles.hamburgerCloseBtn}
                onClick={onCloseButtonClick}
              >
                &times;
              </button>
            </li>
          )}
          {items.map((item) => (
            <li key={item.label} className={styles.menuItem}>
              <a href={item.href || "#"}>
                {item.label} {item.icon}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
