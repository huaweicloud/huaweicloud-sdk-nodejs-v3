

export class SelectDbTableObjectInfo {
    private 'db_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    public constructor(dbName?: string, tableName?: string) { 
        this['db_name'] = dbName;
        this['table_name'] = tableName;
    }
    public withDbName(dbName: string): SelectDbTableObjectInfo {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): SelectDbTableObjectInfo {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): SelectDbTableObjectInfo {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
}