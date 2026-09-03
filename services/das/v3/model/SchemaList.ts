

export class SchemaList {
    private 'schema_name'?: string;
    public constructor() { 
    }
    public withSchemaName(schemaName: string): SchemaList {
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