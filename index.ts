import { generateSessionToken } from "./lib/Sessions/Requests/sessionToken";


let session = generateSessionToken(64);

console.log(session.length);
