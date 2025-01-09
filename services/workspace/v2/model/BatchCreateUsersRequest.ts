import { BatchCreateUsersReq } from './BatchCreateUsersReq';


export class BatchCreateUsersRequest {
    public body?: BatchCreateUsersReq;
    public constructor() { 
    }
    public withBody(body: BatchCreateUsersReq): BatchCreateUsersRequest {
        this['body'] = body;
        return this;
    }
}