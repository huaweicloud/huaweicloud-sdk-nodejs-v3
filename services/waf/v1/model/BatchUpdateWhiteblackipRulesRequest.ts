import { BatchUpdateWhiteBlackIpRuleRequestBody } from './BatchUpdateWhiteBlackIpRuleRequestBody';


export class BatchUpdateWhiteblackipRulesRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public body?: BatchUpdateWhiteBlackIpRuleRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): BatchUpdateWhiteblackipRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchUpdateWhiteblackipRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: BatchUpdateWhiteBlackIpRuleRequestBody): BatchUpdateWhiteblackipRulesRequest {
        this['body'] = body;
        return this;
    }
}