import { PolicyGroupForUpdate } from './PolicyGroupForUpdate';


export class ModifyPolicyGroupRequest {
    private 'policy_group'?: PolicyGroupForUpdate;
    public constructor() { 
    }
    public withPolicyGroup(policyGroup: PolicyGroupForUpdate): ModifyPolicyGroupRequest {
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