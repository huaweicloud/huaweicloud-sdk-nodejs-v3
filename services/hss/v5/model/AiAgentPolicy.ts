

export class AiAgentPolicy {
    private 'policy_group_name'?: string;
    private 'policy_group_id'?: string;
    private 'policy_group_type'?: number;
    private 'policy_group_enabled'?: boolean;
    private 'is_default'?: boolean;
    public constructor() { 
    }
    public withPolicyGroupName(policyGroupName: string): AiAgentPolicy {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
    public withPolicyGroupId(policyGroupId: string): AiAgentPolicy {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withPolicyGroupType(policyGroupType: number): AiAgentPolicy {
        this['policy_group_type'] = policyGroupType;
        return this;
    }
    public set policyGroupType(policyGroupType: number  | undefined) {
        this['policy_group_type'] = policyGroupType;
    }
    public get policyGroupType(): number | undefined {
        return this['policy_group_type'];
    }
    public withPolicyGroupEnabled(policyGroupEnabled: boolean): AiAgentPolicy {
        this['policy_group_enabled'] = policyGroupEnabled;
        return this;
    }
    public set policyGroupEnabled(policyGroupEnabled: boolean  | undefined) {
        this['policy_group_enabled'] = policyGroupEnabled;
    }
    public get policyGroupEnabled(): boolean | undefined {
        return this['policy_group_enabled'];
    }
    public withIsDefault(isDefault: boolean): AiAgentPolicy {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: boolean  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): boolean | undefined {
        return this['is_default'];
    }
}