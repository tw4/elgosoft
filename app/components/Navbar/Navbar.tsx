"use client";

import {useState} from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbarContainer}>
            <a href="/">
                <img
                    className={styles.navbarLogo}
                    src="/assets/logo.png"
                    width={150}
                    alt="logo"
                />
            </a>
            <ul
                className={
                    isMenuOpen
                        ? styles.navbarItemContainerActive
                        : styles.navbarItemContainer
                }
            >
                <li>
                    <a href="#home">Ana Sayfa</a>
                </li>
                <li>
                    <a href="#services">Hizmetler</a>
                </li>
                <li>
                    <a href="#about">Hakkımızda</a>
                </li>
                <li>
                    <a href="#experiences">Deneyim</a>
                </li>
                <li>
                    <a href='https://blog.elgosoft.com/'>Blog</a>
                </li>
                <li>
                    <a href="#contact">İletişim</a>
                </li>
            </ul>
            <div
                className={
                    isMenuOpen ? styles.hamburgerMenuActive : styles.hamburgerMenu
                }
                onClick={toggleMenu}
            >
                <div className={styles.hamburgerLine}/>
                <div className={styles.hamburgerLine}/>
                <div className={styles.hamburgerLine}/>
            </div>
        </nav>
    );
};
