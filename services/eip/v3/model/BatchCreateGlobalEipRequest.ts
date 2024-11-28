import { BatchCreateGlobalEipRequestBody } from './BatchCreateGlobalEipRequestBody';


export class BatchCreateGlobalEipRequest {
    public body?: BatchCreateGlobalEipRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchCreateGlobalEipRequestBody): BatchCreateGlobalEipRequest {
        this['body'] = body;
        return this;
    }
}