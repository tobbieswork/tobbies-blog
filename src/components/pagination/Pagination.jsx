"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}#recent_post`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() => router.push(`?page=${page + 1}#recent_post`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
