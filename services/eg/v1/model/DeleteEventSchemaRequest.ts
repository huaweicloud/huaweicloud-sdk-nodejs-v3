

export class DeleteEventSchemaRequest {
    private 'schema_id'?: string;
    public constructor(schemaId?: string) { 
        this['schema_id'] = schemaId;
    }
    public withSchemaId(schemaId: string): DeleteEventSchemaRequest {
        this['schema_id'] = schemaId;
        return this;
    }
    public set schemaId(schemaId: string  | undefined) {
        this['schema_id'] = schemaId;
    }
    public get schemaId(): string | undefined {
        return this['schema_id'];
    }
}