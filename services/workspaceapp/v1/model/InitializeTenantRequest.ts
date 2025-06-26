import { InitializeTenantReq } from './InitializeTenantReq';


export class InitializeTenantRequest {
    public body?: InitializeTenantReq;
    public constructor() { 
    }
    public withBody(body: InitializeTenantReq): InitializeTenantRequest {
        this['body'] = body;
        return this;
    }
}