

export class AgentPolicyInfo {
    private 'policy_id'?: string;
    private 'group_id'?: string;
    private 'policy_name'?: string;
    private 'feature_name'?: string;
    private 'policy_category'?: string;
    private 'policy_status'?: string;
    public constructor() { 
    }
    public withPolicyId(policyId: string): AgentPolicyInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withGroupId(groupId: string): AgentPolicyInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withPolicyName(policyName: string): AgentPolicyInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withFeatureName(featureName: string): AgentPolicyInfo {
        this['feature_name'] = featureName;
        return this;
    }
    public set featureName(featureName: string  | undefined) {
        this['feature_name'] = featureName;
    }
    public get featureName(): string | undefined {
        return this['feature_name'];
    }
    public withPolicyCategory(policyCategory: string): AgentPolicyInfo {
        this['policy_category'] = policyCategory;
        return this;
    }
    public set policyCategory(policyCategory: string  | undefined) {
        this['policy_category'] = policyCategory;
    }
    public get policyCategory(): string | undefined {
        return this['policy_category'];
    }
    public withPolicyStatus(policyStatus: string): AgentPolicyInfo {
        this['policy_status'] = policyStatus;
        return this;
    }
    public set policyStatus(policyStatus: string  | undefined) {
        this['policy_status'] = policyStatus;
    }
    public get policyStatus(): string | undefined {
        return this['policy_status'];
    }
}