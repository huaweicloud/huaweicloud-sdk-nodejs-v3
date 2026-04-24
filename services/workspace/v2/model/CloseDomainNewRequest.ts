import { CloseDomainNewReq } from './CloseDomainNewReq';


export class CloseDomainNewRequest {
    public body?: CloseDomainNewReq;
    public constructor() { 
    }
    public withBody(body: CloseDomainNewReq): CloseDomainNewRequest {
        this['body'] = body;
        return this;
    }
}