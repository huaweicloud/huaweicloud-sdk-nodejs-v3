import { BatchResumeInstanceReq } from './BatchResumeInstanceReq';


export class RestoreRecycleInstanceRequest {
    public body?: BatchResumeInstanceReq;
    public constructor() { 
    }
    public withBody(body: BatchResumeInstanceReq): RestoreRecycleInstanceRequest {
        this['body'] = body;
        return this;
    }
}