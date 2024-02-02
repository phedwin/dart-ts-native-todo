
import { isJSDocCallbackTag } from "typescript";


class DB
{
    constructor(public database: string[]){}

    query(args: string, newInsert: string)
    {
        //this is so funny

        let c = args.startsWith('select') ? this.database : [] 
        
        let b  = args.startsWith('hello') ? this.database.push(newInsert).valueOf(): new Error("nothing inserted");
        
        console.log(b);
        
        // return args.startsWith('select') ? this.database : [] ||
        // args.startsWith('insert') ? this.database.push(newInsert): new Error("nothing inserted");
    }
}

export { DB };