



//
//  im mocking the data from a local api i built w/ laraval
//  

import axios from 'axios';
import { prisma } from '../lib/Database/client';




 // seeding to some sqlite db
async function seedData() {
    try 
    {

     const response = await axios.get('http://localhost:8000/users');
     const users = response.data;

    //  console.log('Fetched users from API:', users);

    for (let i = 0; i < users.length; i++) 
    {
        await prisma.users.create(
            {
                data : 
                {
                    firstName : users[i].firstName,
                    secondName : users[i].secondName,
                    profilePhoto : users[i].profilePhoto,
                    remember : users[i].remember,
                    active : users[i].active,
                    username : users[i].username,
                    email : users[i].email,
                }
                
            }
        )    
        
    }
    console.log('Created user:', users);
     
    
    } 

    catch (error) 
    {
        console.error('Error seeding data:', error);
    } 
   finally 
    {
     await prisma.$disconnect();
    }
 }
 
 seedData()
    .then(async() => {
        prisma.$disconnect()
    })
    .catch(async (e) =>
    {
        prisma.$disconnect()
        console.log(e);
        
    });


