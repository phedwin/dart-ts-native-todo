import { userDetails } from "../Interface/userDetails";


interface User
{
    id : number | string
    username : string,
    firstName? : string,
    lastName? : string,
    userDetails : userDetails,
    date: Date,
    active: boolean,
    rememberMe : boolean

}

class Users
{
    all() : []
    {
        return [];
    }
    find()
    {

    }
}

export { User, Users};

