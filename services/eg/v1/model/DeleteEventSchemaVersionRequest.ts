

export class DeleteEventSchemaVersionRequest {
    private 'schema_id'?: string;
    public version?: number;
    public constructor(schemaId?: string, version?: number) { 
        this['schema_id'] = schemaId;
        this['version'] = version;
    }
    public withSchemaId(schemaId: string): DeleteEventSchemaVersionRequest {
        this['schema_id'] = schemaId;
        return this;
    }
    public set schemaId(schemaId: string  | undefined) {
        this['schema_id'] = schemaId;
    }
    public get schemaId(): string | undefined {
        return this['schema_id'];
    }
    public withVersion(version: number): DeleteEventSchemaVersionRequest {
        this['version'] = version;
        return this;
    }
}