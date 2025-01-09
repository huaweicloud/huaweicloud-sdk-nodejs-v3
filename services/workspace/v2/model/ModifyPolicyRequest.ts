import { Policies } from './Policies';


export class ModifyPolicyRequest {
    public policies?: Policies;
    public constructor() { 
    }
    public withPolicies(policies: Policies): ModifyPolicyRequest {
        this['policies'] = policies;
        return this;
    }
}