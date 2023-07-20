

export class QueryDatabaseTableInfo {
    private 'database_name'?: string;
    private 'table_names'?: Array<string>;
    public constructor(databaseName?: string) { 
        this['database_name'] = databaseName;
    }
    public withDatabaseName(databaseName: string): QueryDatabaseTableInfo {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableNames(tableNames: Array<string>): QueryDatabaseTableInfo {
        this['table_names'] = tableNames;
        return this;
    }
    public set tableNames(tableNames: Array<string>  | undefined) {
        this['table_names'] = tableNames;
    }
    public get tableNames(): Array<string> | undefined {
        return this['table_names'];
    }
}