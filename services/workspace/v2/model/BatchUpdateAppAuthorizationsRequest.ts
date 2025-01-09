import { BatchAssignAppAuthorizationsReq } from './BatchAssignAppAuthorizationsReq';


export class BatchUpdateAppAuthorizationsRequest {
    public body?: BatchAssignAppAuthorizationsReq;
    public constructor() { 
    }
    public withBody(body: BatchAssignAppAuthorizationsReq): BatchUpdateAppAuthorizationsRequest {
        this['body'] = body;
        return this;
    }
}