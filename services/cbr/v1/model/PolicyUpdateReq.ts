import { PolicyUpdate } from './PolicyUpdate';


export class PolicyUpdateReq {
    public policy?: PolicyUpdate;
    public constructor(policy?: PolicyUpdate) { 
        this['policy'] = policy;
    }
    public withPolicy(policy: PolicyUpdate): PolicyUpdateReq {
        this['policy'] = policy;
        return this;
    }
}