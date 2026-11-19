

export class ListPolicyGroupDetailRequest {
    private 'group_id'?: string;
    private 'enterprise_project_id'?: string;
    public enabled?: boolean;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): ListPolicyGroupDetailRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPolicyGroupDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnabled(enabled: boolean): ListPolicyGroupDetailRequest {
        this['enabled'] = enabled;
        return this;
    }
}