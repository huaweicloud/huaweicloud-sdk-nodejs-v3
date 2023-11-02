

export class TableDetail {
    private 'schema_name'?: string;
    private 'table_name'?: string;
    public constructor(schemaName?: string, tableName?: string) { 
        this['schema_name'] = schemaName;
        this['table_name'] = tableName;
    }
    public withSchemaName(schemaName: string): TableDetail {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableName(tableName: string): TableDetail {
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