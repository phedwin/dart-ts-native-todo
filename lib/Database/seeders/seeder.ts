
import { prisma } from "../client";
import UserFactory from "../factories/UserFactory";

const numberOfUsers = 10;

const users: { username: string; email: string; password: string; }[] = [];

for (let i = 0; i < numberOfUsers; i++) {
  const username = UserFactory.generateRandomUsername();
  const email = UserFactory.generateRandomEmail();
  const password = UserFactory.generateRandomPassword();
  users.push({ username, email , password});
}


async function main() {
    const user = prisma.users.createMany({ data : users})
  }
  
main()

.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})



