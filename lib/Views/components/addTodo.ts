import { Details } from "../../Interface/DetailsType";
import { put } from "./Facades/Cache";


export class todos {
    constructor(
        private todo: string , 
        private completed: boolean = false, 
        private details?: Details
        ) 
    {
        
    }

    public showTodos()
    {
        let savedNotes: Array<string> = [];

        this.details?.text?.map((e) => savedNotes.push(e));
        console.log(savedNotes);
        put();
        
    }

    public destroyToodos()
    {

    }
}



