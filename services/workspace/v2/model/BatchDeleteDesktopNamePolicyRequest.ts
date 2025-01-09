import { BatchDeleteDesktopNamePolicyReq } from './BatchDeleteDesktopNamePolicyReq';


export class BatchDeleteDesktopNamePolicyRequest {
    public body?: BatchDeleteDesktopNamePolicyReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteDesktopNamePolicyReq): BatchDeleteDesktopNamePolicyRequest {
        this['body'] = body;
        return this;
    }
}