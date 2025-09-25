

export class ListPrivacyPolicyRulesRequest {
    public projectid?: string;
    public policyids?: string;
    private 'enterprise_project_id'?: string;
    public page?: number;
    public pagesize?: number;
    private 'Content-Type'?: string;
    public constructor(projectid?: string) { 
        this['projectid'] = projectid;
    }
    public withProjectid(projectid: string): ListPrivacyPolicyRulesRequest {
        this['projectid'] = projectid;
        return this;
    }
    public withPolicyids(policyids: string): ListPrivacyPolicyRulesRequest {
        this['policyids'] = policyids;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPrivacyPolicyRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPage(page: number): ListPrivacyPolicyRulesRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListPrivacyPolicyRulesRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withContentType(contentType: string): ListPrivacyPolicyRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}