import { CreateDatabaseDetail } from './CreateDatabaseDetail';


export class CreateDatabaseReq {
    public databases?: Array<CreateDatabaseDetail>;
    public constructor(databases?: Array<CreateDatabaseDetail>) { 
        this['databases'] = databases;
    }
    public withDatabases(databases: Array<CreateDatabaseDetail>): CreateDatabaseReq {
        this['databases'] = databases;
        return this;
    }
}