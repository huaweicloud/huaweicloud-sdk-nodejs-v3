import { CheckEnterpriseIdReq } from './CheckEnterpriseIdReq';


export class CheckEnterpriseIdRequest {
    public body?: CheckEnterpriseIdReq;
    public constructor() { 
    }
    public withBody(body: CheckEnterpriseIdReq): CheckEnterpriseIdRequest {
        this['body'] = body;
        return this;
    }
}