

export class SchemaVolumeResult {
    private 'schema_size'?: string;
    private 'table_count'?: string;
    private 'user_name'?: string;
    private 'nsp_name'?: string;
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
    public withNspName(nspName: string): SchemaVolumeResult {
        this['nsp_name'] = nspName;
        return this;
    }
    public set nspName(nspName: string  | undefined) {
        this['nsp_name'] = nspName;
    }
    public get nspName(): string | undefined {
        return this['nsp_name'];
    }
}