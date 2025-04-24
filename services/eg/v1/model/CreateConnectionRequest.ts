import { ConnectionCreateReq } from './ConnectionCreateReq';


export class CreateConnectionRequest {
    public body?: ConnectionCreateReq;
    public constructor() { 
    }
    public withBody(body: ConnectionCreateReq): CreateConnectionRequest {
        this['body'] = body;
        return this;
    }
}