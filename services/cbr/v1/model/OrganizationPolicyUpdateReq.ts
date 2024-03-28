import { OrganizationPolicyUpdate } from './OrganizationPolicyUpdate';


export class OrganizationPolicyUpdateReq {
    public policy?: OrganizationPolicyUpdate;
    public constructor(policy?: OrganizationPolicyUpdate) { 
        this['policy'] = policy;
    }
    public withPolicy(policy: OrganizationPolicyUpdate): OrganizationPolicyUpdateReq {
        this['policy'] = policy;
        return this;
    }
}