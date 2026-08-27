import { BatchCheckRejoinDomainReq } from './BatchCheckRejoinDomainReq';


export class BatchCheckDesktopRejoinDomainRequest {
    public body?: BatchCheckRejoinDomainReq;
    public constructor() { 
    }
    public withBody(body: BatchCheckRejoinDomainReq): BatchCheckDesktopRejoinDomainRequest {
        this['body'] = body;
        return this;
    }
}