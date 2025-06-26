import { BatchCreateServerGroupTagsReq } from './BatchCreateServerGroupTagsReq';


export class BatchCreateServerGroupTagsRequest {
    public body?: BatchCreateServerGroupTagsReq;
    public constructor() { 
    }
    public withBody(body: BatchCreateServerGroupTagsReq): BatchCreateServerGroupTagsRequest {
        this['body'] = body;
        return this;
    }
}