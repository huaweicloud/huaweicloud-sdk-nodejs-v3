import { CustomizeSchemaVersionCreateReq } from './CustomizeSchemaVersionCreateReq';


export class CreateEventSchemaVersionRequest {
    private 'schema_id'?: string;
    public body?: CustomizeSchemaVersionCreateReq;
    public constructor(schemaId?: string) { 
        this['schema_id'] = schemaId;
    }
    public withSchemaId(schemaId: string): CreateEventSchemaVersionRequest {
        this['schema_id'] = schemaId;
        return this;
    }
    public set schemaId(schemaId: string  | undefined) {
        this['schema_id'] = schemaId;
    }
    public get schemaId(): string | undefined {
        return this['schema_id'];
    }
    public withBody(body: CustomizeSchemaVersionCreateReq): CreateEventSchemaVersionRequest {
        this['body'] = body;
        return this;
    }
}