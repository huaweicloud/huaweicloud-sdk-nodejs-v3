import { BatchCreateAntiTamperRulesRequestBody } from './BatchCreateAntiTamperRulesRequestBody';


export class BatchCreateAntiTamperRuleRequest {
    public projectid?: string;
    public policyids?: string;
    private 'enterprise_project_id'?: string;
    private 'Content-Type'?: string;
    public body?: BatchCreateAntiTamperRulesRequestBody;
    public constructor(projectid?: string) { 
        this['projectid'] = projectid;
    }
    public withProjectid(projectid: string): BatchCreateAntiTamperRuleRequest {
        this['projectid'] = projectid;
        return this;
    }
    public withPolicyids(policyids: string): BatchCreateAntiTamperRuleRequest {
        this['policyids'] = policyids;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchCreateAntiTamperRuleRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withContentType(contentType: string): BatchCreateAntiTamperRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchCreateAntiTamperRulesRequestBody): BatchCreateAntiTamperRuleRequest {
        this['body'] = body;
        return this;
    }
}