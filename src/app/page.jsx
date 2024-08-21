"use client";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home({ searchParams }) {
  const { status } = useSession();
  const router = useRouter();
  const page = parseInt(searchParams.page) || 1;

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  if (status !== "authenticated") {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={styles.container}>
        <Featured />
        <CategoryList />
        <div className={styles.content}>
          <CardList page={page}/>
          <Menu />
        </div>
      </div>
    );
  }
}
