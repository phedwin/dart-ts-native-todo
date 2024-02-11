class UserFactory {
    private static usernames = ['john_doe', 'jane_smith', 'sam_wilson'];
    private static domains = ['example.com', 'test.com', 'example.org'];
  
    static generateRandomUsername(): string {
      const randomIndex = Math.floor(Math.random() * UserFactory.usernames.length);
      return UserFactory.usernames[randomIndex];
    }
  
    static generateRandomEmail(): string {
      const username = this.generateRandomUsername();
      const domain = this.domains[Math.floor(Math.random() * this.domains.length)];
      return `${username}@${domain}`;
    }
  
    static generateRandomPassword(): string {
      return Math.random().toString(36).slice(2); // Generates a random alphanumeric string
    }
  }
  
  export default UserFactory;
  