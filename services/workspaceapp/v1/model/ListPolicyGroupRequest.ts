

export class ListPolicyGroupRequest {
    public offset?: number;
    public limit?: number;
    private 'policy_group_name'?: string;
    private 'policy_group_type'?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListPolicyGroupRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPolicyGroupRequest {
        this['limit'] = limit;
        return this;
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
    public withPolicyGroupType(policyGroupType: number): ListPolicyGroupRequest {
        this['policy_group_type'] = policyGroupType;
        return this;
    }
    public set policyGroupType(policyGroupType: number  | undefined) {
        this['policy_group_type'] = policyGroupType;
    }
    public get policyGroupType(): number | undefined {
        return this['policy_group_type'];
    }
}