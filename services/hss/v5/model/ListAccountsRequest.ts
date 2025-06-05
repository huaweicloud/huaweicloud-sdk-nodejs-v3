

export class ListAccountsRequest {
    private 'X-Security-Token'?: string;
    public region?: string;
    public limit?: number;
    public offset?: number;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): ListAccountsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withRegion(region: string): ListAccountsRequest {
        this['region'] = region;
        return this;
    }
    public withLimit(limit: number): ListAccountsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAccountsRequest {
        this['offset'] = offset;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAccountsRequest {
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