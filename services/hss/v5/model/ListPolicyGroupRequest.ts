

export class ListPolicyGroupRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'group_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): ListPolicyGroupRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPolicyGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withGroupName(groupName: string): ListPolicyGroupRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withOffset(offset: number): ListPolicyGroupRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPolicyGroupRequest {
        this['limit'] = limit;
        return this;
    }
}