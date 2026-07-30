

export class AiPolicyInfo {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    public enabled?: boolean;
    private 'policy_group_id'?: string;
    public content?: string;
    public description?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withPolicyId(policyId: string): AiPolicyInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): AiPolicyInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withEnabled(enabled: boolean): AiPolicyInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withPolicyGroupId(policyGroupId: string): AiPolicyInfo {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withContent(content: string): AiPolicyInfo {
        this['content'] = content;
        return this;
    }
    public withDescription(description: string): AiPolicyInfo {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: number): AiPolicyInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): AiPolicyInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}