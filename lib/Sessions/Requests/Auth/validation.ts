export function validateUsername(username: string): boolean
 {
    // Username must be between 3 and 15 characters and contain only alphanumeric characters
    const usernameRegex : RegExp = /^[a-zA-Z0-9]{3,15}$/;
    // console.log(usernameRegex.test(username));
    
    return usernameRegex.test(username);
  }
  
  export function validatePassword(password: string): boolean 
  {
    // Password must be at least 6 characters long 
    //contain at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    
    // console.log(passwordRegex.test(password));
    
    return passwordRegex.test(password);
  }
  