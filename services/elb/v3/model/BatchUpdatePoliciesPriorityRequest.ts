import { BatchUpdatePoliciesPriorityRequestBody } from './BatchUpdatePoliciesPriorityRequestBody';


export class BatchUpdatePoliciesPriorityRequest {
    public body?: BatchUpdatePoliciesPriorityRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchUpdatePoliciesPriorityRequestBody): BatchUpdatePoliciesPriorityRequest {
        this['body'] = body;
        return this;
    }
}