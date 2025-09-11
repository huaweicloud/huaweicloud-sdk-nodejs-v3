import { UpdatePolicyReq } from './UpdatePolicyReq';


export class UpdateAlarmRulePoliciesReqBodyV2 {
    public policies?: Array<UpdatePolicyReq>;
    public constructor(policies?: Array<UpdatePolicyReq>) { 
        this['policies'] = policies;
    }
    public withPolicies(policies: Array<UpdatePolicyReq>): UpdateAlarmRulePoliciesReqBodyV2 {
        this['policies'] = policies;
        return this;
    }
}