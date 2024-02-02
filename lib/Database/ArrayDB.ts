import Database from "bun:sqlite";

class DB
{

    query(query : string) 
    {
        // this is not so good in the meantime but we can work w/ it
        const db = new Database("../cli/lib/Database/database.db");
        return db.query(query).get();

    }
}

export { DB };