import { BatchDeleteAccessPoliciesReq } from './BatchDeleteAccessPoliciesReq';


export class BatchDeleteAccessPoliciesRequest {
    public body?: BatchDeleteAccessPoliciesReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteAccessPoliciesReq): BatchDeleteAccessPoliciesRequest {
        this['body'] = body;
        return this;
    }
}