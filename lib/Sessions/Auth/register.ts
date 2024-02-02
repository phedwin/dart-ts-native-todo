

// import { guestMiddleware } from './middlewares';

import { guestMiddleware } from "../../Middleware/guest";
import { performRegistration } from "../Requests/Auth/registration";
import { validatePassword, validateUsername } from "../Requests/Auth/validation";

const registerUser = async (username: string, password: string, email: string): Promise<void> => {
  try {
    // Check if the user is a guest
    const isGuest = await guestMiddleware();

    if (!isGuest) {
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
registerUser('phedwin', 'password', 'phedwin@example.com');
