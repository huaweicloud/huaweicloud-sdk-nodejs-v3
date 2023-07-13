import { BatchDeletePublicIpRequestBody } from './BatchDeletePublicIpRequestBody';


export class BatchDeletePublicIpRequest {
    public body?: BatchDeletePublicIpRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeletePublicIpRequestBody): BatchDeletePublicIpRequest {
        this['body'] = body;
        return this;
    }
}