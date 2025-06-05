

export class DeleteHostsGroupRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'group_id'?: string;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withRegion(region: string): DeleteHostsGroupRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteHostsGroupRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withGroupId(groupId: string): DeleteHostsGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}