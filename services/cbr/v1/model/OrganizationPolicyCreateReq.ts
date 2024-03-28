import { OrganizationPolicyCreate } from './OrganizationPolicyCreate';


export class OrganizationPolicyCreateReq {
    public policy?: OrganizationPolicyCreate;
    public constructor(policy?: OrganizationPolicyCreate) { 
        this['policy'] = policy;
    }
    public withPolicy(policy: OrganizationPolicyCreate): OrganizationPolicyCreateReq {
        this['policy'] = policy;
        return this;
    }
}