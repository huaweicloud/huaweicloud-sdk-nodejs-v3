import { BatchRejoinDomainReq } from './BatchRejoinDomainReq';


export class BatchUpdateDesktopDomainRequest {
    public body?: BatchRejoinDomainReq;
    public constructor() { 
    }
    public withBody(body: BatchRejoinDomainReq): BatchUpdateDesktopDomainRequest {
        this['body'] = body;
        return this;
    }
}