

export class SchemaVolumeResult {
    private 'schema_size'?: string;
    private 'table_count'?: string;
    private 'user_name'?: string;
    private 'schema_name'?: string;
    public constructor() { 
    }
    public withSchemaSize(schemaSize: string): SchemaVolumeResult {
        this['schema_size'] = schemaSize;
        return this;
    }
    public set schemaSize(schemaSize: string  | undefined) {
        this['schema_size'] = schemaSize;
    }
    public get schemaSize(): string | undefined {
        return this['schema_size'];
    }
    public withTableCount(tableCount: string): SchemaVolumeResult {
        this['table_count'] = tableCount;
        return this;
    }
    public set tableCount(tableCount: string  | undefined) {
        this['table_count'] = tableCount;
    }
    public get tableCount(): string | undefined {
        return this['table_count'];
    }
    public withUserName(userName: string): SchemaVolumeResult {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withSchemaName(schemaName: string): SchemaVolumeResult {
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