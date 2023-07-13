

export class ListAnticrawlerRulesRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'policy_id': string | undefined;
    public offset: number;
    public limit: number;
    public type?: string;
    public constructor(contentType?: any, policyId?: any, offset?: any, limit?: any) { 
        this['Content-Type'] = contentType;
        this['policy_id'] = policyId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withContentType(contentType: string): ListAnticrawlerRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAnticrawlerRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): ListAnticrawlerRulesRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId() {
        return this['policy_id'];
    }
    public withOffset(offset: number): ListAnticrawlerRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAnticrawlerRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: string): ListAnticrawlerRulesRequest {
        this['type'] = type;
        return this;
    }
}