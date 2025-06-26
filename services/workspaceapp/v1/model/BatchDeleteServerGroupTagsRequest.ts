import { BatchDeleteServerGroupTagsReq } from './BatchDeleteServerGroupTagsReq';


export class BatchDeleteServerGroupTagsRequest {
    public body?: BatchDeleteServerGroupTagsReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteServerGroupTagsReq): BatchDeleteServerGroupTagsRequest {
        this['body'] = body;
        return this;
    }
}