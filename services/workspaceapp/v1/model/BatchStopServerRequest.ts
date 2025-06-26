import { ServerHaltReq } from './ServerHaltReq';


export class BatchStopServerRequest {
    public body?: ServerHaltReq;
    public constructor() { 
    }
    public withBody(body: ServerHaltReq): BatchStopServerRequest {
        this['body'] = body;
        return this;
    }
}