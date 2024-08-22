"use client";
import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SinglePage = ({ params }) => {
  const [postData, setPostData] = useState(null);
  const { status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else {
      const getData = async (slug) => {
        const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
          cache: "no-store",
        });
      
        if (!res.ok) {
          throw new Error("Failed");
        }
        const data = await res.json();
      
        setPostData(data);
      };
      const { slug } = params;
      getData(slug);
    }
  }, [status]);

  return (
    postData && (
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{postData?.title}</h1>
            <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image src={postData.user.image || '/images/logo.jpg'} alt="" fill className={styles.avatar} />
              </div>
              <div className={styles.userTextContainer}>
                <span className={styles.username}>{postData?.user.name}</span>
                <span className={styles.date}>{postData.createdAt}</span>
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image src={postData.img || '/images/development.jpg'} alt="" fill className={styles.image} />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: postData?.desc }}
            />
            <div className={styles.comment}>
              <Comments postSlug={postData.slug}/>
            </div>
          </div>
          <Menu />
        </div>
      </div>
    )
  );
};

export default SinglePage;
