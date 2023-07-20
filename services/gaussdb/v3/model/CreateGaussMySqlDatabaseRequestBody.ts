import { CreateGaussMySqlDatabase } from './CreateGaussMySqlDatabase';


export class CreateGaussMySqlDatabaseRequestBody {
    public databases?: Array<CreateGaussMySqlDatabase>;
    public constructor(databases?: Array<CreateGaussMySqlDatabase>) { 
        this['databases'] = databases;
    }
    public withDatabases(databases: Array<CreateGaussMySqlDatabase>): CreateGaussMySqlDatabaseRequestBody {
        this['databases'] = databases;
        return this;
    }
}