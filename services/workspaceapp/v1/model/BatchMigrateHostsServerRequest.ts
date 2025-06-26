import { BatchMigrateServerReq } from './BatchMigrateServerReq';


export class BatchMigrateHostsServerRequest {
    public body?: BatchMigrateServerReq;
    public constructor() { 
    }
    public withBody(body: BatchMigrateServerReq): BatchMigrateHostsServerRequest {
        this['body'] = body;
        return this;
    }
}