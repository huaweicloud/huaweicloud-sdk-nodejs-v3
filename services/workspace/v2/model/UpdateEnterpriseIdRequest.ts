import { ModifyEnterpriseIdReq } from './ModifyEnterpriseIdReq';


export class UpdateEnterpriseIdRequest {
    public body?: ModifyEnterpriseIdReq;
    public constructor() { 
    }
    public withBody(body: ModifyEnterpriseIdReq): UpdateEnterpriseIdRequest {
        this['body'] = body;
        return this;
    }
}