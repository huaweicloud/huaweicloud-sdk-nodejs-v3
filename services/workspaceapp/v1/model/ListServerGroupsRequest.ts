

export class ListServerGroupsRequest {
    public offset?: number;
    public limit?: number;
    private 'server_group_name'?: string;
    private 'server_group_id'?: string;
    private 'app_type'?: string;
    public tags?: string;
    private 'enterprise_project_id'?: string;
    private 'is_secondary_server_group'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListServerGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListServerGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withServerGroupName(serverGroupName: string): ListServerGroupsRequest {
        this['server_group_name'] = serverGroupName;
        return this;
    }
    public set serverGroupName(serverGroupName: string  | undefined) {
        this['server_group_name'] = serverGroupName;
    }
    public get serverGroupName(): string | undefined {
        return this['server_group_name'];
    }
    public withServerGroupId(serverGroupId: string): ListServerGroupsRequest {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withAppType(appType: string): ListServerGroupsRequest {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): string | undefined {
        return this['app_type'];
    }
    public withTags(tags: string): ListServerGroupsRequest {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListServerGroupsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withIsSecondaryServerGroup(isSecondaryServerGroup: string): ListServerGroupsRequest {
        this['is_secondary_server_group'] = isSecondaryServerGroup;
        return this;
    }
    public set isSecondaryServerGroup(isSecondaryServerGroup: string  | undefined) {
        this['is_secondary_server_group'] = isSecondaryServerGroup;
    }
    public get isSecondaryServerGroup(): string | undefined {
        return this['is_secondary_server_group'];
    }
}