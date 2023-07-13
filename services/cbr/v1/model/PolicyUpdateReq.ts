import { PolicyUpdate } from './PolicyUpdate';


export class PolicyUpdateReq {
    public policy: PolicyUpdate;
    public constructor(policy?: any) { 
        this['policy'] = policy;
    }
    public withPolicy(policy: PolicyUpdate): PolicyUpdateReq {
        this['policy'] = policy;
        return this;
    }
}