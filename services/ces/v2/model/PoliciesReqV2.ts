import { Policy } from './Policy';


export class PoliciesReqV2 {
    public policies?: Array<Policy>;
    public constructor(policies?: Array<Policy>) { 
        this['policies'] = policies;
    }
    public withPolicies(policies: Array<Policy>): PoliciesReqV2 {
        this['policies'] = policies;
        return this;
    }
}