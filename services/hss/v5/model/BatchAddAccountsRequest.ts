import { BatchAddAccountsRequestInfo } from './BatchAddAccountsRequestInfo';


export class BatchAddAccountsRequest {
    private 'X-Security-Token'?: string;
    public region?: string;
    private 'enterprise_project_id'?: string;
    public body?: BatchAddAccountsRequestInfo;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withXSecurityToken(xSecurityToken: string): BatchAddAccountsRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withRegion(region: string): BatchAddAccountsRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchAddAccountsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: BatchAddAccountsRequestInfo): BatchAddAccountsRequest {
        this['body'] = body;
        return this;
    }
}