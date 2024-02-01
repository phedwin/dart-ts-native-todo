import { Cache } from "../Facades/Cache";
import { arguments } from "../Types/userArguments";



class simpleCache implements Cache
{
    constructor(public cache : arguments[]){};
    set(args : arguments): void 
    {
        this.cache.push(args);
    }
    get(): arguments []
    {
        return this.cache;
    }

}