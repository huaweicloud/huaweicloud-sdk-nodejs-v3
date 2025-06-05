

export class ListHostGroupsRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'group_name'?: string;
    public constructor() { 
    }
    public withRegion(region: string): ListHostGroupsRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListHostGroupsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListHostGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHostGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withGroupName(groupName: string): ListHostGroupsRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
}