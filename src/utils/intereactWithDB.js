import prisma from "./connect.js";


async function main() {

    // const categories = ['coding', 'culture', 'design', 'development', 'devops', 'finance', 'health', 'marketing', 'productivity', 'science', 'technology', 'writing'];

    // const dataMap = categories.map((category) => {
    //     return {
    //         title: category,
    //         slug: category,
    //         img: `/${category}.png`
    //     }
    // })
    //   const createUser = await prisma.category.createMany({data: dataMap});

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

