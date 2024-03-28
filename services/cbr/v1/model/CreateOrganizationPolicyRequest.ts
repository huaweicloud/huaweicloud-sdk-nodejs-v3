import { OrganizationPolicyCreateReq } from './OrganizationPolicyCreateReq';


export class CreateOrganizationPolicyRequest {
    public body?: OrganizationPolicyCreateReq;
    public constructor() { 
    }
    public withBody(body: OrganizationPolicyCreateReq): CreateOrganizationPolicyRequest {
        this['body'] = body;
        return this;
    }
}