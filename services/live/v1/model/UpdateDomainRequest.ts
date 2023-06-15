import { LiveDomainModifyReq } from './LiveDomainModifyReq';


export class UpdateDomainRequest {
    public body?: LiveDomainModifyReq;
    public constructor() { 
    }
    public withBody(body: LiveDomainModifyReq): UpdateDomainRequest {
        this['body'] = body;
        return this;
    }
}