import { ResourceTenant } from './ResourceTenant';


export class CreateAgencyRequest {
    public body?: ResourceTenant;
    public constructor() { 
    }
    public withBody(body: ResourceTenant): CreateAgencyRequest {
        this['body'] = body;
        return this;
    }
}