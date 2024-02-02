/**
 *im mocking the data from a local api i built w/ laraval
 */

import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedData() {
  try {
    // Fetch data from the Laravel API (replace the URL with your actual API endpoint)
    const response = await axios.get('http://localhost:8000/users');
    const users = response.data;

    // Seed users and their posts into Prisma
    for (const user of users) {
      const prismaUser = await prisma.user.create({
        data: {
          firstName: user.firstName,
          secondName: user.secondName,
          profilePhoto: user.profile_photo,
          remember: user.remember,
          active: user.active,
          username: user.username,
          email: user.email,
          // userInfo: JSON.stringify(user.user_info),
          createdAt: new Date(user.created_at),
          updatedAt: new Date(user.updated_at),
          emailVerifiedAt: new Date(user.email_verified_at),
          posts: {
            create: user.posts.map((post: { status: any; title: any; context: any; created_at: string | number | Date; updated_at: string | number | Date; }) => ({
              status: post.status,
              title: post.title,
              context: post.context,
              createdAt: new Date(post.created_at),
              updatedAt: new Date(post.updated_at),
            })),
          },
        },
      });

      console.log('User seeded:', prismaUser);
    }
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedData();
