import { AgencyCreateReq } from './AgencyCreateReq';


export class CreateAgenciesRequest {
    public body?: AgencyCreateReq;
    public constructor() { 
    }
    public withBody(body: AgencyCreateReq): CreateAgenciesRequest {
        this['body'] = body;
        return this;
    }
}