

export class ListPolicyGroupInfoRequest {
    public limit?: number;
    public offset?: number;
    private 'policy_group_id'?: string;
    private 'policy_group_name'?: string;
    public priority?: number;
    private 'update_time'?: string;
    public description?: string;
    private 'scope_flag'?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListPolicyGroupInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPolicyGroupInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withPolicyGroupId(policyGroupId: string): ListPolicyGroupInfoRequest {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withPolicyGroupName(policyGroupName: string): ListPolicyGroupInfoRequest {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
    public withPriority(priority: number): ListPolicyGroupInfoRequest {
        this['priority'] = priority;
        return this;
    }
    public withUpdateTime(updateTime: string): ListPolicyGroupInfoRequest {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withDescription(description: string): ListPolicyGroupInfoRequest {
        this['description'] = description;
        return this;
    }
    public withScopeFlag(scopeFlag: number): ListPolicyGroupInfoRequest {
        this['scope_flag'] = scopeFlag;
        return this;
    }
    public set scopeFlag(scopeFlag: number  | undefined) {
        this['scope_flag'] = scopeFlag;
    }
    public get scopeFlag(): number | undefined {
        return this['scope_flag'];
    }
}