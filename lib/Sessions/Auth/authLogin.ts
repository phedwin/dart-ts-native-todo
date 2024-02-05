
/**
 * 
 * @param username 
 * @param password 
 * @param remember 
 * @returns 
 * 
 * before u hit this endpoint
 * check if the user is actually a guest, u can't login an already logged in user
 * genereate new session token, im assuming at logout i will invalidate their session
 * incase at login they allow remember me, then generate random token for that
 * all this will be pushed via prisma client. In the meantime bun memory db will work
 * after all this validation check against records, if true ? return 1 : else reject
 * 
 * ps --.>> we need encrypt & decrypt password
 */

import { guestMiddleware } from "../../Middleware/guest";
import { performLoginCheck, saveRememberMeTokenToDatabase } from "../Requests/Auth/authentication";
import { validatePassword, validateUsername } from "../Requests/Auth/validation";
import { generateRememberMeToken } from "../Requests/rememberMeToken";
import { generateSessionToken } from "../Requests/sessionToken";

const loginUser = 
    async (
        username: string, 
        password: string, 
        remember: boolean = false
        ): Promise<void> => 
    {
        try 
        {

            // check url manually or request current url and validate
            //todo =>> request url this will make the url dynamic && avoid hardcoding
            let url = 'http://localhost:8001/users/';
            const isGuest = await guestMiddleware(url);

            if (!isGuest) {
            console.error('User is not a guest. Cannot perform login.');
            
            return;// || process.exit(1);
            
            };

            if (!validateUsername(username) || !validatePassword(password)) {
            console.log('Invalid username or password format.');
            return;
            }

            const sessionToken = generateSessionToken(64);

            if (remember) {
            const rememberToken = generateRememberMeToken(32);


            await saveRememberMeTokenToDatabase(username, rememberToken);
            }

            const isAuthenticated = await performLoginCheck(username, password, sessionToken);

            // here i will check against the db, just to ascertain
            if (isAuthenticated) 
            {
                console.log('User logged in successfully!');
            } 
            else 
            {
                console.log('Invalid username or password.');
            }

        } 
        catch (error) 
        {
            console.error('Error during login:', error);
        }
};


export { loginUser }

// when a certain url is requested like localhost:port/login we can then serve this
// it passed all the test, yeahhh i did not write any tests but i console logged and its pretty OK


