import { PolicyCreate } from './PolicyCreate';


export class PolicyCreateReq {
    public policy: PolicyCreate;
    public constructor(policy?: any) { 
        this['policy'] = policy;
    }
    public withPolicy(policy: PolicyCreate): PolicyCreateReq {
        this['policy'] = policy;
        return this;
    }
}