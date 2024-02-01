import { Details } from "./lib/src/components/Interface/DetailsType";
import { todos } from "./lib/src/components/addTodo";


let c =  new todos("first assignment" as string, true as boolean,
{
    year : 2004,
    text : ["did evenythin i was told",
            "ended up not seeiing anythin cool",
            "this sucks soo hard"
        ],
    author : "Jared"
} as Details).showTodos();