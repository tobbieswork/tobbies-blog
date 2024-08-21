"use client";
import React, {useState, useEffect} from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed");
      }
  
      const data = await res.json();
      setCategories(data);
    };
    getCategories();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        {categories && categories.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles[item.slug]}`}
            key={item.id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            <div className={styles.catTitle}>
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
