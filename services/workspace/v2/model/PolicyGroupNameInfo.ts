

export class PolicyGroupNameInfo {
    private 'policy_group_name'?: string;
    public description?: string;
    public constructor() { 
    }
    public withPolicyGroupName(policyGroupName: string): PolicyGroupNameInfo {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
    public withDescription(description: string): PolicyGroupNameInfo {
        this['description'] = description;
        return this;
    }
}