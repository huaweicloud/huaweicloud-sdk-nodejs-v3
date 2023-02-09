import { BatchCopyDRequestBody } from './BatchCopyDRequestBody';


export class BatchCopyDomainRequest {
    public body?: BatchCopyDRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchCopyDRequestBody): BatchCopyDomainRequest {
        this['body'] = body;
        return this;
    }
}