import { UpdatePolicy } from './UpdatePolicy';


export class PoliciesReqV2 {
    public policies?: Array<UpdatePolicy>;
    public constructor(policies?: Array<UpdatePolicy>) { 
        this['policies'] = policies;
    }
    public withPolicies(policies: Array<UpdatePolicy>): PoliciesReqV2 {
        this['policies'] = policies;
        return this;
    }
}