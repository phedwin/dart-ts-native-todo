import { prisma } from "./lib/Database/client";
import UserFactory from "./lib/Database/factories/UserFactory";



const numberOfUsers = 10;

const users: { username: string; email: string; password: string; }[] = [];

for (let i = 0; i < numberOfUsers; i++) {
  const username = UserFactory.generateRandomUsername();
  const email = UserFactory.generateRandomEmail();
  const password = UserFactory.generateRandomPassword();
  users.push({ username, email , password});
}


async function main() {
    try {
        const createdUsers = await prisma.users.createMany({ data: users });
        console.log("Users created:", createdUsers);
    } catch (error) {
        console.error("Error creating users:", error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

  
main()