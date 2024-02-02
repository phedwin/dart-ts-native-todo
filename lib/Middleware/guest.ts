

import axios from 'axios';

export async function guestMiddleware(): Promise<boolean> {
  try 
  {
    // Make a request to check if the user is not authenticated
    const response = await axios.get('http://localhost:8000/users/home');
    return !response.data.isAuthenticated;
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
}
