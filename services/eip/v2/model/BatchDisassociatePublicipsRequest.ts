import { BatchDeletePublicIpRequestBody } from './BatchDeletePublicIpRequestBody';


export class BatchDisassociatePublicipsRequest {
    public body?: BatchDeletePublicIpRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeletePublicIpRequestBody): BatchDisassociatePublicipsRequest {
        this['body'] = body;
        return this;
    }
}