

/**
 * here is where we actually simulate user request against db;
 */

import Database from "bun:sqlite";
import { prisma } from "../../../Database/client";
import { generateRememberMeToken } from "../rememberMeToken";

// w/ bun we can

// let db = new Database();
// db.run("INSERT INTO users VALUES (?, ?)", generateRememberMeToken(32), 1);

interface User 
{
    username: string;
    password: string;
}
  
  
const users: User[] = 
[
  { 
    username: 'exampleUser', password: 'examplePassword' 
  },
];

export function performLoginCheck(username: string, password: string, sessionToken: string): Promise<boolean> 
{
  return new Promise((resolve) => 
  {
    // Simulating a database check
    const user = users.find((u: { username: string; password: string; }) => u.username === username && u.password === password);
    // const users = prisma.users.findFirstOrThrow()

    if (user) 
    {
      // You would typically store the session token in a database or a secure storage
      console.log(`User ${username} logged in with session token: ${sessionToken}`);
      resolve(true);
    } 
    else 
    {
      resolve(false);
    }
  });
}

export function saveRememberMeTokenToDatabase(username: string, rememberMeToken: string): Promise<void> 
{
  return new Promise((resolve) => 
  {
    // Simulating saving the remember-me token to a database
    console.log(`Remember-me token saved for user ${username}: ${rememberMeToken}`);
    resolve();
  });
}


  