

export class DeleteGaussMySqlDatabaseRequestBody {
    public databases?: Array<string>;
    public constructor(databases?: Array<string>) { 
        this['databases'] = databases;
    }
    public withDatabases(databases: Array<string>): DeleteGaussMySqlDatabaseRequestBody {
        this['databases'] = databases;
        return this;
    }
}