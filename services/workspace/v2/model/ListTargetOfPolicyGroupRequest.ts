

export class ListTargetOfPolicyGroupRequest {
    private 'policy_group_id'?: string;
    private 'target_type'?: string;
    private 'target_name'?: string;
    public limit?: number;
    public offset?: string;
    public constructor(policyGroupId?: string) { 
        this['policy_group_id'] = policyGroupId;
    }
    public withPolicyGroupId(policyGroupId: string): ListTargetOfPolicyGroupRequest {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withTargetType(targetType: string): ListTargetOfPolicyGroupRequest {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withTargetName(targetName: string): ListTargetOfPolicyGroupRequest {
        this['target_name'] = targetName;
        return this;
    }
    public set targetName(targetName: string  | undefined) {
        this['target_name'] = targetName;
    }
    public get targetName(): string | undefined {
        return this['target_name'];
    }
    public withLimit(limit: number): ListTargetOfPolicyGroupRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListTargetOfPolicyGroupRequest {
        this['offset'] = offset;
        return this;
    }
}