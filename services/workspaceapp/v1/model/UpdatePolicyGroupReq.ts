import { PolicyGroupForUpdate } from './PolicyGroupForUpdate';


export class UpdatePolicyGroupReq {
    private 'policy_group'?: PolicyGroupForUpdate;
    public constructor(policyGroup?: PolicyGroupForUpdate) { 
        this['policy_group'] = policyGroup;
    }
    public withPolicyGroup(policyGroup: PolicyGroupForUpdate): UpdatePolicyGroupReq {
        this['policy_group'] = policyGroup;
        return this;
    }
    public set policyGroup(policyGroup: PolicyGroupForUpdate  | undefined) {
        this['policy_group'] = policyGroup;
    }
    public get policyGroup(): PolicyGroupForUpdate | undefined {
        return this['policy_group'];
    }
}