"use client";
import styles from "./search.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Search({ searchParams }) {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const router = useRouter();
    const keyword = searchParams.keywords ? searchParams.keywords.trim().toLowerCase() : "";

    useEffect(() => {
        if (!keyword) {
            router.push("/");
        }else {
            // Fetch data from server
            const getPosts = async () => {
                const res = await fetch(`/api/search?keywords=${keyword}`);

                if (!res.ok) {
                    console.error("Failed to fetch data from server");
                }else {
                    const data = await res.json();
                    setPosts(data);
                }
                setLoading(false);
            };
            getPosts();
        }
    }, [keyword]);

    return (
        <>
            <h1>Result for {keyword}:</h1>
            {loading && <p>Loading...</p>}
            <ul className={styles.posts}>
                {posts.length > 0 &&
                    (posts.map((post) => 
                        <li className={styles.post} key={post.id}>
                            <Link href={`/posts/${post.slug}`}>
                                <h2>{post.title}</h2>
                            </Link>
                        </li>)
                    )
                }
                {!loading && posts.length === 0 && <p>No result found</p>}
            </ul>
        </>
    );
}
