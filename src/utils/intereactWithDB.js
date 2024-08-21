import prisma from "./connect.js";


async function main() {
    const result = await prisma.post.findMany({
      where: {
        OR: [
          {
            title: {
              contains: 'design',
            },
          },
          {
            desc: {
              contains: 'design',
            },
          },
        ]
      },
    })

    console.log(result);
}

main()