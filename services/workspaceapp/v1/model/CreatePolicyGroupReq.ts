import { PolicyGroupForCreate } from './PolicyGroupForCreate';


export class CreatePolicyGroupReq {
    private 'policy_group'?: PolicyGroupForCreate;
    public constructor(policyGroup?: PolicyGroupForCreate) { 
        this['policy_group'] = policyGroup;
    }
    public withPolicyGroup(policyGroup: PolicyGroupForCreate): CreatePolicyGroupReq {
        this['policy_group'] = policyGroup;
        return this;
    }
    public set policyGroup(policyGroup: PolicyGroupForCreate  | undefined) {
        this['policy_group'] = policyGroup;
    }
    public get policyGroup(): PolicyGroupForCreate | undefined {
        return this['policy_group'];
    }
}