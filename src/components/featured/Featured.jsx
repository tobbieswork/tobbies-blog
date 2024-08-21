"use client"

import React, { useState, useEffect } from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {

  const [starPost, setStarPost] = useState(null);

  useEffect(() => {
    const getStarPost = async () => {
      const res = await fetch("http://localhost:3000/api/starPost", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed");
      }
  
      const data = await res.json();
      setStarPost(data);
    };
    getStarPost();
  }, []);


  return (
    <div className={styles.container}>
      <div class={styles.wrapper}>
        <div class={styles.top}>Tobbies</div>
        <div class={styles.bottom} aria-hidden="true">Tobbies</div>
      </div>
      <h1 className={styles.title}>
        Welcome!
      </h1>
      <p className={styles.subTitle}>
        Exploring the Future: Insights, Code, and Beyond.
      </p>
      {starPost && (
        <>
          <h3 className={styles.newestTitle}>Newest Post</h3>
          <div className={styles.post}>
            <div className={styles.imgContainer}>
              <Image src={starPost.img || "/images/development.jpg"} alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <h1 className={styles.postTitle}>{starPost.title}</h1>
              <p
                className={styles.postDesc}
                dangerouslySetInnerHTML={{ __html: starPost?.desc }}
              >
              </p>
              <Link href={`/posts/${starPost.slug}`}>
                <button type="button" className={styles.button}>Read More</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
