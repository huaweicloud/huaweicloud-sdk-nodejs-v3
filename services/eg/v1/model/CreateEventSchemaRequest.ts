import { CustomizeSchemaCreateReq } from './CustomizeSchemaCreateReq';


export class CreateEventSchemaRequest {
    public body?: CustomizeSchemaCreateReq;
    public constructor() { 
    }
    public withBody(body: CustomizeSchemaCreateReq): CreateEventSchemaRequest {
        this['body'] = body;
        return this;
    }
}