

export class ListWhiteblackipPolicyRulesRequest {
    public policyids?: string;
    private 'enterprise_project_id'?: string;
    public page?: number;
    public pagesize?: number;
    private 'Content-Type'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withPolicyids(policyids: string): ListWhiteblackipPolicyRulesRequest {
        this['policyids'] = policyids;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWhiteblackipPolicyRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPage(page: number): ListWhiteblackipPolicyRulesRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListWhiteblackipPolicyRulesRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withContentType(contentType: string): ListWhiteblackipPolicyRulesRequest {
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