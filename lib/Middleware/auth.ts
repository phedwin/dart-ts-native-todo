

import axios from 'axios';

export async function authMiddleware(): Promise<boolean> {
  try {
    // Make a request to check if the user is authenticated
    const response = await axios.get('http://localhost:8000/users/home');
    return response.data.isAuthenticated;
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
}
