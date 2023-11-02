

export class SchemasList {
    private 'schema_name'?: string;
    public description?: string;
    public constructor() { 
    }
    public withSchemaName(schemaName: string): SchemasList {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withDescription(description: string): SchemasList {
        this['description'] = description;
        return this;
    }
}