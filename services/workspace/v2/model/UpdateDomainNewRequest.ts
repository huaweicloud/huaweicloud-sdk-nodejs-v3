import { UpdateDomainNewReq } from './UpdateDomainNewReq';


export class UpdateDomainNewRequest {
    public body?: UpdateDomainNewReq;
    public constructor() { 
    }
    public withBody(body: UpdateDomainNewReq): UpdateDomainNewRequest {
        this['body'] = body;
        return this;
    }
}