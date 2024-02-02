import { User } from "../Model/UserModel";


export interface todoDetails
{
    todoName : string,
    todoBody : string,
    todoAuthor : User,
}