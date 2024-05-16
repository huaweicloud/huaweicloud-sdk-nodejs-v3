

export class RestoreTableListDetail {
    private 'db_name'?: string;
    private 'schema_name'?: string;
    private 'table_name'?: string;
    private 'new_db_name'?: string;
    private 'new_schema_name'?: string;
    private 'new_table_name'?: string;
    public constructor(dbName?: string) { 
        this['db_name'] = dbName;
    }
    public withDbName(dbName: string): RestoreTableListDetail {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withSchemaName(schemaName: string): RestoreTableListDetail {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): RestoreTableListDetail {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withNewDbName(newDbName: string): RestoreTableListDetail {
        this['new_db_name'] = newDbName;
        return this;
    }
    public set newDbName(newDbName: string  | undefined) {
        this['new_db_name'] = newDbName;
    }
    public get newDbName(): string | undefined {
        return this['new_db_name'];
    }
    public withNewSchemaName(newSchemaName: string): RestoreTableListDetail {
        this['new_schema_name'] = newSchemaName;
        return this;
    }
    public set newSchemaName(newSchemaName: string  | undefined) {
        this['new_schema_name'] = newSchemaName;
    }
    public get newSchemaName(): string | undefined {
        return this['new_schema_name'];
    }
    public withNewTableName(newTableName: string): RestoreTableListDetail {
        this['new_table_name'] = newTableName;
        return this;
    }
    public set newTableName(newTableName: string  | undefined) {
        this['new_table_name'] = newTableName;
    }
    public get newTableName(): string | undefined {
        return this['new_table_name'];
    }
}