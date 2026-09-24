

export class ExecuteOptimizeTableSpaceRequestBody {
    private 'table_name'?: string;
    private 'database_name'?: string;
    public constructor(tableName?: string, databaseName?: string) { 
        this['table_name'] = tableName;
        this['database_name'] = databaseName;
    }
    public withTableName(tableName: string): ExecuteOptimizeTableSpaceRequestBody {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withDatabaseName(databaseName: string): ExecuteOptimizeTableSpaceRequestBody {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
}