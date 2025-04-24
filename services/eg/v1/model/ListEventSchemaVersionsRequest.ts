

export class ListEventSchemaVersionsRequest {
    private 'schema_id'?: string;
    public offset?: number;
    public limit?: number;
    public sort?: string;
    public version?: string;
    public constructor(schemaId?: string) { 
        this['schema_id'] = schemaId;
    }
    public withSchemaId(schemaId: string): ListEventSchemaVersionsRequest {
        this['schema_id'] = schemaId;
        return this;
    }
    public set schemaId(schemaId: string  | undefined) {
        this['schema_id'] = schemaId;
    }
    public get schemaId(): string | undefined {
        return this['schema_id'];
    }
    public withOffset(offset: number): ListEventSchemaVersionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEventSchemaVersionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSort(sort: string): ListEventSchemaVersionsRequest {
        this['sort'] = sort;
        return this;
    }
    public withVersion(version: string): ListEventSchemaVersionsRequest {
        this['version'] = version;
        return this;
    }
}