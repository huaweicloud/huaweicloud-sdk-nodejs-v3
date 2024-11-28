

export class ListOrganizationTreeRequest {
    private 'X-Security-Token'?: string;
    public region?: string;
    private 'is_refresh'?: boolean;
    private 'enterprise_project_id'?: string;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withXSecurityToken(xSecurityToken: string): ListOrganizationTreeRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withRegion(region: string): ListOrganizationTreeRequest {
        this['region'] = region;
        return this;
    }
    public withIsRefresh(isRefresh: boolean): ListOrganizationTreeRequest {
        this['is_refresh'] = isRefresh;
        return this;
    }
    public set isRefresh(isRefresh: boolean  | undefined) {
        this['is_refresh'] = isRefresh;
    }
    public get isRefresh(): boolean | undefined {
        return this['is_refresh'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListOrganizationTreeRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}