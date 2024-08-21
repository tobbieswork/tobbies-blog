import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Search from "../search/Search";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftMenu}>
        <Link href="/">
          <div className={styles.logo}>tobbies</div>
        </Link>
        <Search />
      </div>
      <div className={styles.links}>
        <AuthLinks />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
