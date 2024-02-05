

//
//  im mocking the data from a local api i built w/ laraval
//  

import axios from 'axios';
import { prisma } from '../lib/Database/client';


 // seeding to some sqlite db
async function seedData() {
    try 
    {

     const response = await axios.get('http://localhost:8001/users');
     const users = response.data;

    for (let i = 0; i < users.length; i++) 
    {
        await prisma.users.create(
            {
                data : {
                    firstName : users.firstName,
                    secondName : users.secondName,
                    profilePhoto : users.profilePhoto,
                    remember : users.remember,
                    active : users.active,
                    username : users.username,
                    email : users.email,
                    post : {
                      // blah blah
                    }
                }
                
            }
        )    
        
    }
     
    
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


