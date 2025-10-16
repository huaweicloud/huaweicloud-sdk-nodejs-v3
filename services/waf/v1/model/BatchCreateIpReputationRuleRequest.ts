import { BatchCreateIpReputationRuleRequestBody } from './BatchCreateIpReputationRuleRequestBody';


export class BatchCreateIpReputationRuleRequest {
    public projectid?: string;
    public policyids?: string;
    private 'enterprise_project_id'?: string;
    private 'Content-Type'?: string;
    public body?: BatchCreateIpReputationRuleRequestBody;
    public constructor(projectid?: string) { 
        this['projectid'] = projectid;
    }
    public withProjectid(projectid: string): BatchCreateIpReputationRuleRequest {
        this['projectid'] = projectid;
        return this;
    }
    public withPolicyids(policyids: string): BatchCreateIpReputationRuleRequest {
        this['policyids'] = policyids;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchCreateIpReputationRuleRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withContentType(contentType: string): BatchCreateIpReputationRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BatchCreateIpReputationRuleRequestBody): BatchCreateIpReputationRuleRequest {
        this['body'] = body;
        return this;
    }
}