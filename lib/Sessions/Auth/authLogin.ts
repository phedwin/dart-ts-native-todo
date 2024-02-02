

/***
/* my thought process
/* when u get a new login
/* create a new session
/* compare the userform with that in database 
/* if they click remember me which by default should default to false then make a new token 
/* and store as a cookie
/********************/
import { generateRememberMeToken } from "../Requests/rememberMeToken";
import { generateSessionToken } from "../Requests/sessionToken";
import { validatePassword, validateUsername } from "../Requests/Auth/validation";
import { performLoginCheck, saveRememberMeTokenToDatabase } from "../Requests/Auth/authentication";
import { guestMiddleware } from "../../Middleware/guest";


//before this runs, firts i think the page should be guest
//so im gonna have guest middlware running before this 

const loginUser = async (username: string, password: string, remember: boolean = false): Promise<void> => {
  try {

    //check with the guest middlware

    const isGuest = await guestMiddleware();

    if (!isGuest) {
      console.log('User is not a guest. Cannot perform login.');
      return;
    };

    // Validate username and password
    if (!validateUsername(username) || !validatePassword(password)) {
      console.log('Invalid username or password format.');
      return;
    }

    // Generate a session token
    const sessionToken = generateSessionToken(64);

    if (remember) {
      // Generate a remember-me token
      const rememberToken = generateRememberMeToken(32);

      // Store the remember-me token in the database or as a cookie
      await saveRememberMeTokenToDatabase(username, rememberToken);
    }

    // Perform the login check
    const isAuthenticated = await performLoginCheck(username, password, sessionToken);

    if (isAuthenticated) {
      console.log('User logged in successfully!');
    } else {
      console.log('Invalid username or password.');
    }

  } catch (error) {
    console.error('Error during login:', error);
  }
};


// Example usage
loginUser('phedwin', 'password', true);
