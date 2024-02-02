


export async function performRegistration(username: string, password: string): Promise<boolean> {
    try 
    {
      return true;
    } 
    catch (error) {
      console.error('Error during registration:', error);
      return false;
    }
  }
  