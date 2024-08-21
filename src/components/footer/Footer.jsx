import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <div className={styles.logoImg}>
            <Image src="/logo.png" alt="Tobbies blog" width={50} height={50} />
          </div>
          <h1 className={styles.logoText}>Tobbies's Blog</h1>
        </div>
        <p className={styles.desc}>
          Exploring the Future: Insights, Code, and Beyond.
          Where Code Meets Culture: A Journey Through Fashion, Design, Tech, and Life.
        </p>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/blog?cat=coding">Coding</Link>
          <Link href="/blog?cat=fashion">Fashion</Link>
          <Link href="/blog?cat=health">Health</Link>
          <Link href="/blog?cat=design">Design</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
