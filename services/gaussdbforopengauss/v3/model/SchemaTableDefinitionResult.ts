

export class SchemaTableDefinitionResult {
    private 'schema_name'?: string;
    private 'table_definition'?: string;
    public constructor() { 
    }
    public withSchemaName(schemaName: string): SchemaTableDefinitionResult {
        this['schema_name'] = schemaName;
        return this;
    }
    public set schemaName(schemaName: string  | undefined) {
        this['schema_name'] = schemaName;
    }
    public get schemaName(): string | undefined {
        return this['schema_name'];
    }
    public withTableDefinition(tableDefinition: string): SchemaTableDefinitionResult {
        this['table_definition'] = tableDefinition;
        return this;
    }
    public set tableDefinition(tableDefinition: string  | undefined) {
        this['table_definition'] = tableDefinition;
    }
    public get tableDefinition(): string | undefined {
        return this['table_definition'];
    }
}