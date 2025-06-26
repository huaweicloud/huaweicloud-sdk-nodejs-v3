

export class ListTenantServerGroupsRequest {
    public offset?: number;
    public limit?: number;
    private 'sever_group_name'?: string;
    private 'app_type'?: string;
    private 'is_secondary_server_group'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListTenantServerGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTenantServerGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSeverGroupName(severGroupName: string): ListTenantServerGroupsRequest {
        this['sever_group_name'] = severGroupName;
        return this;
    }
    public set severGroupName(severGroupName: string  | undefined) {
        this['sever_group_name'] = severGroupName;
    }
    public get severGroupName(): string | undefined {
        return this['sever_group_name'];
    }
    public withAppType(appType: string): ListTenantServerGroupsRequest {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): string | undefined {
        return this['app_type'];
    }
    public withIsSecondaryServerGroup(isSecondaryServerGroup: string): ListTenantServerGroupsRequest {
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