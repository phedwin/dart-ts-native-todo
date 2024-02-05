import { Cache } from "../Facades/Cache";
import { arguments } from "../Types/userArguments";





// i want something like

class ArrayCache
{
    constructor(public args : arguments[]){}
    put(tempCache: string)
    {
        // add into the cache, this shouldnt hit the db
        this.args.push(tempCache);
    }
}

let newCache :arguments[] = [] 
let cache = new ArrayCache(newCache);