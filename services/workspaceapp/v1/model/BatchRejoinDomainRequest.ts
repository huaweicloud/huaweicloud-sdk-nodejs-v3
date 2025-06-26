import { BatchRejoinDomainReq } from './BatchRejoinDomainReq';


export class BatchRejoinDomainRequest {
    public body?: BatchRejoinDomainReq;
    public constructor() { 
    }
    public withBody(body: BatchRejoinDomainReq): BatchRejoinDomainRequest {
        this['body'] = body;
        return this;
    }
}