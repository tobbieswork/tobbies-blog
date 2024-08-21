import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const keywords = searchParams.get("keywords");

  const query = {
    where: {
        OR: [
            { title: { contains: keywords, mode: "insensitive" } },
            { desc: { contains: keywords, mode: "insensitive" } },
        ],
    },
  };

  try {
    const posts = await prisma.post.findMany(query);
    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};