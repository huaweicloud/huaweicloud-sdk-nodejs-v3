

export class Database {
    private 'database_name'?: string;
    private 'database_guid'?: string;
    private 'database_qualified_name'?: string;
    private 'table_count'?: number;
    private 'data_size'?: number;
    public constructor() { 
    }
    public withDatabaseName(databaseName: string): Database {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withDatabaseGuid(databaseGuid: string): Database {
        this['database_guid'] = databaseGuid;
        return this;
    }
    public set databaseGuid(databaseGuid: string  | undefined) {
        this['database_guid'] = databaseGuid;
    }
    public get databaseGuid(): string | undefined {
        return this['database_guid'];
    }
    public withDatabaseQualifiedName(databaseQualifiedName: string): Database {
        this['database_qualified_name'] = databaseQualifiedName;
        return this;
    }
    public set databaseQualifiedName(databaseQualifiedName: string  | undefined) {
        this['database_qualified_name'] = databaseQualifiedName;
    }
    public get databaseQualifiedName(): string | undefined {
        return this['database_qualified_name'];
    }
    public withTableCount(tableCount: number): Database {
        this['table_count'] = tableCount;
        return this;
    }
    public set tableCount(tableCount: number  | undefined) {
        this['table_count'] = tableCount;
    }
    public get tableCount(): number | undefined {
        return this['table_count'];
    }
    public withDataSize(dataSize: number): Database {
        this['data_size'] = dataSize;
        return this;
    }
    public set dataSize(dataSize: number  | undefined) {
        this['data_size'] = dataSize;
    }
    public get dataSize(): number | undefined {
        return this['data_size'];
    }
}