

export class DatabaseSchemaTableResult {
    private 'table_name'?: string;
    private 'schema_name'?: string;
    public constructor() { 
    }
    public withTableName(tableName: string): DatabaseSchemaTableResult {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withSchemaName(schemaName: string): DatabaseSchemaTableResult {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
}