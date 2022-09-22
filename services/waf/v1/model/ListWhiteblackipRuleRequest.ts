

export class ListWhiteblackipRuleRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'policy_id': string | undefined;
    public page?: number;
    public pagesize?: number;
    public name?: string;
    public constructor(contentType?: any, policyId?: any) { 
        this['Content-Type'] = contentType;
        this['policy_id'] = policyId;
    }
    public withContentType(contentType: string): ListWhiteblackipRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWhiteblackipRuleRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): ListWhiteblackipRuleRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId() {
        return this['policy_id'];
    }
    public withPage(page: number): ListWhiteblackipRuleRequest {
        this['page'] = page;
        return this;
    }
    public withPagesize(pagesize: number): ListWhiteblackipRuleRequest {
        this['pagesize'] = pagesize;
        return this;
    }
    public withName(name: string): ListWhiteblackipRuleRequest {
        this['name'] = name;
        return this;
    }
}