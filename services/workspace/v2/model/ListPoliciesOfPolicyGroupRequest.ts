

export class ListPoliciesOfPolicyGroupRequest {
    private 'policy_group_id'?: string;
    private 'policy_type'?: string;
    public constructor(policyGroupId?: string) { 
        this['policy_group_id'] = policyGroupId;
    }
    public withPolicyGroupId(policyGroupId: string): ListPoliciesOfPolicyGroupRequest {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withPolicyType(policyType: string): ListPoliciesOfPolicyGroupRequest {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): string | undefined {
        return this['policy_type'];
    }
}