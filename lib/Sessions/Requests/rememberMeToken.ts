

const generateRememberMeToken = (length: number): string =>
{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let token = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      token += characters.charAt(randomIndex);
    }
  
    return token;
}
   
export { generateRememberMeToken }


  