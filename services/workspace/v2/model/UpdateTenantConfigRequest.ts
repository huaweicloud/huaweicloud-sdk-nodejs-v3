import { UpdateTenantConfigReq } from './UpdateTenantConfigReq';


export class UpdateTenantConfigRequest {
    public body?: UpdateTenantConfigReq;
    public constructor() { 
    }
    public withBody(body: UpdateTenantConfigReq): UpdateTenantConfigRequest {
        this['body'] = body;
        return this;
    }
}