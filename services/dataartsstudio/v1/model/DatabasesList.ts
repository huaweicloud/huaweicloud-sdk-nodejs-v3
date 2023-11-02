

export class DatabasesList {
    private 'database_name'?: string;
    public description?: string;
    public constructor() { 
    }
    public withDatabaseName(databaseName: string): DatabasesList {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withDescription(description: string): DatabasesList {
        this['description'] = description;
        return this;
    }
}