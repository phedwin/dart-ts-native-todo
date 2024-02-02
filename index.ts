import { DB } from "./lib/Database/ArrayDB";



let myDB: string[] = ["work", "us", "here"];
let db = new DB(myDB);
db.query('insert', 'phedwine');




