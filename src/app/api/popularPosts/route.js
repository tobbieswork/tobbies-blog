import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {

  const query = {
    take: 4,
    orderBy: {
        views: 'desc',
    },
    include: {
        user: true,
    },
  };

  try {
    const popularPosts = await prisma.post.findMany(query);
    return new NextResponse(JSON.stringify(popularPosts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};