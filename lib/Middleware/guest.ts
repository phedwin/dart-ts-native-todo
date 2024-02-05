

import axios from 'axios';

export async function guestMiddleware(url :string): Promise<boolean> 
{
  try 
  {
    // Make a request to check if the user is not authenticated
    const response = await axios.get(url);
    
    // console.log(response.headers.getAuthorization() as unknown == null ? 1 : 0);
    
    console.log(!response.data.isAuthenticated);
    
    return !response.data.isAuthenticated;

  } 
  catch (error) 
  {
    console.error('Error checking authentication:', error);
    return false;
  }
}
