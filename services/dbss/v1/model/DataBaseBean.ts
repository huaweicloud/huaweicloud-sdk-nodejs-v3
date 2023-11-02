import { DataBase } from './DataBase';


export class DataBaseBean {
    public database?: DataBase;
    public constructor(database?: DataBase) { 
        this['database'] = database;
    }
    public withDatabase(database: DataBase): DataBaseBean {
        this['database'] = database;
        return this;
    }
}