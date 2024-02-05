import { guestMiddleware } from "../../Middleware/guest";
import { performRegistration } from "../Requests/Auth/registration";
import { validatePassword, validateUsername } from "../Requests/Auth/validation";


const registerUser = 
async ( username: string, 
        password: string, 
        email?: string): Promise<void> => 
{
  try {
    // Check if the user is a guest
    let url =  'http://localhost:8001/users/'

    // i think this alone cannot check the status of either being guest/auth

    const isGuest = await guestMiddleware(url);

    if (!isGuest) 
    {
      console.log('User is not a guest. Cannot perform registration.');
      return;
    }

    // Validate username, password, && todo validate email too.
    if (!validateUsername(username) || !validatePassword(password)) 
    {
      console.log('Invalid username, password, or email format.');
      return;
    }

    // Perform the registration logic
    const registrationResult = await performRegistration(username, password);

    if (registrationResult) {
      console.log('User registered successfully!');
    } else {
      console.log('Registration failed.');
    }

  } catch (error) {
    console.error('Error during registration:', error);
  }
};

// Example usage
registerUser('phedwin', 'password213K', 'phedwin@example.com');

/**
 * i have this funny results from my terminal, that ascertain double reg
 *  
$ don ~ main  ~ /bun/cli ~ bun compile

$ bun run index.ts
true
Invalid username, password, or email format.

$ don ~ main  ~ /bun/cli ~ bun compile
$ bun run index.ts
true
User registered successfully!
don ~ main  ~ /bun/cli ~ bun compile

$ bun run index.ts
true
User registered successfully!

don ~ main  ~ /bun/cli ~ bun compile

with a view this might not work
*/
