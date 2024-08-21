"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  const [popularPosts, setPopularPosts] = useState(null);

  useEffect(() => {
    const getPopularPost = async () => {
      const res = await fetch("http://localhost:3000/api/popularPosts", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      const data = await res.json();
      setPopularPosts(data);
    };
    getPopularPost();
  }, []);
  return (
    <div className={styles.items}>
      {popularPosts && popularPosts.map((post) => {
        return (
          <Link href="/" className={styles.item}>
            {withImage && (
              <div className={styles.imageContainer}>
                <Image src={post.img || "/images/development.jpg"} alt="Post Image" fill className={styles.image} />
              </div>
            )}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles[post.catSlug]}`}>{post.catSlug}</span>
              <h3 className={styles.postTitle}>
                {post.title}
              </h3>
              <div className={styles.detail}>
                <span className={styles.username}>{post.user.name}</span>
                {' - '}
                <span className={styles.data}>{post.views} views</span>
              </div>
            </div>
          </Link>
        );
      })}
      
    </div>
  );
};

export default MenuPosts;
