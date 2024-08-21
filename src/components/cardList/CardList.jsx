'use client';

import React, {useState, useEffect} from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const CardList = ({ page, cat }) => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
        {
          cache: "no-store",
        }
      );
  
      if (!res.ok) {
        throw new Error("Failed");
      }
  
      const { posts: postsData, count: countData } = await res.json();
      setPosts(postsData);
      setCount(countData);
    };
    getCategories();
  }, [page, cat]);

  const POST_PER_PAGE = 4;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div id="recent_post" className={styles.container}>
      <h1 className={styles.title}>Featured Posts</h1>
      {posts ? (
        <>
          <div className={styles.posts}>
            {posts.map((item) => (
              <Card item={item} key={item._id} />
            ))}
          </div>
          <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </>
      ) : <p>No recent posts yet</p>}
    </div>
  );
};

export default CardList;
