import { CustomizeSchemaUpdateReq } from './CustomizeSchemaUpdateReq';


export class UpdateEventSchemaRequest {
    private 'schema_id'?: string;
    public body?: CustomizeSchemaUpdateReq;
    public constructor(schemaId?: string) { 
        this['schema_id'] = schemaId;
    }
    public withSchemaId(schemaId: string): UpdateEventSchemaRequest {
        this['schema_id'] = schemaId;
        return this;
    }
    public set schemaId(schemaId: string  | undefined) {
        this['schema_id'] = schemaId;
    }
    public get schemaId(): string | undefined {
        return this['schema_id'];
    }
    public withBody(body: CustomizeSchemaUpdateReq): UpdateEventSchemaRequest {
        this['body'] = body;
        return this;
    }
}