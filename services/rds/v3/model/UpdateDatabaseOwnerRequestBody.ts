

export class UpdateDatabaseOwnerRequestBody {
    public owner?: string;
    public database?: string;
    public constructor(owner?: string, database?: string) { 
        this['owner'] = owner;
        this['database'] = database;
    }
    public withOwner(owner: string): UpdateDatabaseOwnerRequestBody {
        this['owner'] = owner;
        return this;
    }
    public withDatabase(database: string): UpdateDatabaseOwnerRequestBody {
        this['database'] = database;
        return this;
    }
}