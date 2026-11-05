import { AgencyRequest } from './AgencyRequest';


export class VerifyAgencyRequest {
    public body?: AgencyRequest;
    public constructor() { 
    }
    public withBody(body: AgencyRequest): VerifyAgencyRequest {
        this['body'] = body;
        return this;
    }
}