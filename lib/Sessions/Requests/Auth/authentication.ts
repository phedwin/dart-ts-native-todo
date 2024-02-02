

interface User {
    username: string;
    password: string;
  }
  
  
  const users: User[] = [
    { username: 'exampleUser', password: 'examplePassword' },

  ];
  
  export function performLoginCheck(username: string, password: string, sessionToken: string): Promise<boolean> {
    return new Promise((resolve) => {
      // Simulating a database check
      const user = users.find((u) => u.username === username && u.password === password);
  
      if (user) {
        // You would typically store the session token in a database or a secure storage
        console.log(`User ${username} logged in with session token: ${sessionToken}`);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }
  
  export function saveRememberMeTokenToDatabase(username: string, rememberMeToken: string): Promise<void> {
    return new Promise((resolve) => {
      // Simulating saving the remember-me token to a database
      console.log(`Remember-me token saved for user ${username}: ${rememberMeToken}`);
      resolve();
    });
  }
  