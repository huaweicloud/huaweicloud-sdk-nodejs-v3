import { CreateAntiTamperRulesRequestBody } from './CreateAntiTamperRulesRequestBody';


export class CreateAntiTamperRuleRequest {
    private 'Content-Type': string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'policy_id': string | undefined;
    public body?: CreateAntiTamperRulesRequestBody;
    public constructor(contentType?: any, policyId?: any) { 
        this['Content-Type'] = contentType;
        this['policy_id'] = policyId;
    }
    public withContentType(contentType: string): CreateAntiTamperRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateAntiTamperRuleRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): CreateAntiTamperRuleRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId() {
        return this['policy_id'];
    }
    public withBody(body: CreateAntiTamperRulesRequestBody): CreateAntiTamperRuleRequest {
        this['body'] = body;
        return this;
    }
}