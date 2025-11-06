

export class ListCcPolicyRulesRequest {
    public policyids?: string;
    private 'enterprise_project_id'?: string;
    public page?: number;
    public pagesize?: number;
    private 'Content-Type'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withPolicyids(policyids: string): ListCcPolicyRulesRequest {
        this['policyids'] = policyids;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCcPolicyRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPage(page: number): ListCcPolicyRulesRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListCcPolicyRulesRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withContentType(contentType: string): ListCcPolicyRulesRequest {
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