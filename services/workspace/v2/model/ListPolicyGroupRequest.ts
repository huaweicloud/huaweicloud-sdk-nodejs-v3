

export class ListPolicyGroupRequest {
    public limit?: number;
    public offset?: number;
    private 'policy_group_id'?: string;
    private 'policy_group_name'?: string;
    public priority?: number;
    private 'update_time'?: string;
    public description?: string;
    private 'is_group_name_accurate'?: boolean;
    public constructor() { 
    }
    public withLimit(limit: number): ListPolicyGroupRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPolicyGroupRequest {
        this['offset'] = offset;
        return this;
    }
    public withPolicyGroupId(policyGroupId: string): ListPolicyGroupRequest {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withPolicyGroupName(policyGroupName: string): ListPolicyGroupRequest {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
    public withPriority(priority: number): ListPolicyGroupRequest {
        this['priority'] = priority;
        return this;
    }
    public withUpdateTime(updateTime: string): ListPolicyGroupRequest {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withDescription(description: string): ListPolicyGroupRequest {
        this['description'] = description;
        return this;
    }
    public withIsGroupNameAccurate(isGroupNameAccurate: boolean): ListPolicyGroupRequest {
        this['is_group_name_accurate'] = isGroupNameAccurate;
        return this;
    }
    public set isGroupNameAccurate(isGroupNameAccurate: boolean  | undefined) {
        this['is_group_name_accurate'] = isGroupNameAccurate;
    }
    public get isGroupNameAccurate(): boolean | undefined {
        return this['is_group_name_accurate'];
    }
}