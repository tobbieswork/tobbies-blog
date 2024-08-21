import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src={item.img || '/images/writing.jpg'} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)}
          </span>
          <span>{" • "}</span>
          <span className={styles.category}>
            {item.catSlug}
          </span>
          <span>{" • "}</span>
          <span>{item.views}👁️</span>
        </div>
        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item.desc }}/>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
