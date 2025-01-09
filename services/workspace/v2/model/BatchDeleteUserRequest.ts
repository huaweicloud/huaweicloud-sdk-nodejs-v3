import { BatchDeleteUserReq } from './BatchDeleteUserReq';


export class BatchDeleteUserRequest {
    public body?: BatchDeleteUserReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteUserReq): BatchDeleteUserRequest {
        this['body'] = body;
        return this;
    }
}