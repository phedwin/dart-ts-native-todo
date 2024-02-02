import Database, { SQLiteError } from "bun:sqlite";


export let database = new Database("../database.sqlite", { readonly : true});

console.log(SQLiteError);

