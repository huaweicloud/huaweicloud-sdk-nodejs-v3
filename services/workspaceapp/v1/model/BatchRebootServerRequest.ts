import { ServerHaltReq } from './ServerHaltReq';


export class BatchRebootServerRequest {
    public body?: ServerHaltReq;
    public constructor() { 
    }
    public withBody(body: ServerHaltReq): BatchRebootServerRequest {
        this['body'] = body;
        return this;
    }
}