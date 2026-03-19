

export class ListGeoIpPolicyRulesRequest {
    private 'enterprise_project_id'?: string;
    private 'Content-Type'?: string;
    public policyids?: Array<string>;
    public page?: number;
    public pagesize?: number;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListGeoIpPolicyRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withContentType(contentType: string): ListGeoIpPolicyRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withPolicyids(policyids: Array<string>): ListGeoIpPolicyRulesRequest {
        this['policyids'] = policyids;
        return this;
    }
    public withPage(page: number): ListGeoIpPolicyRulesRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListGeoIpPolicyRulesRequest {
        this['pagesize'] = pagesize;
        return this;
    }
}