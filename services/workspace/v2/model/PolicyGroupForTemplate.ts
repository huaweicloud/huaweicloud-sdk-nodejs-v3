

export class PolicyGroupForTemplate {
    private 'policy_group_name'?: string;
    public description?: string;
    public policies?: string;
    private 'policy_group_type'?: string;
    public constructor(policyGroupName?: string, policies?: string) { 
        this['policy_group_name'] = policyGroupName;
        this['policies'] = policies;
    }
    public withPolicyGroupName(policyGroupName: string): PolicyGroupForTemplate {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
    public withDescription(description: string): PolicyGroupForTemplate {
        this['description'] = description;
        return this;
    }
    public withPolicies(policies: string): PolicyGroupForTemplate {
        this['policies'] = policies;
        return this;
    }
    public withPolicyGroupType(policyGroupType: string): PolicyGroupForTemplate {
        this['policy_group_type'] = policyGroupType;
        return this;
    }
    public set policyGroupType(policyGroupType: string  | undefined) {
        this['policy_group_type'] = policyGroupType;
    }
    public get policyGroupType(): string | undefined {
        return this['policy_group_type'];
    }
}