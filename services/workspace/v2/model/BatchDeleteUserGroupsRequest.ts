import { BatchDeleteUserGroupsReq } from './BatchDeleteUserGroupsReq';


export class BatchDeleteUserGroupsRequest {
    public body?: BatchDeleteUserGroupsReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteUserGroupsReq): BatchDeleteUserGroupsRequest {
        this['body'] = body;
        return this;
    }
}