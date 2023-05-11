import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  // create Leaderboard
  await prisma.leaderboard.upsert({
    where: {
      id: 1,
    },
    create: {
      name: "Woodshop Rubiks Challenge",
      variant: "TIMED",
    },
    update: {},
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
