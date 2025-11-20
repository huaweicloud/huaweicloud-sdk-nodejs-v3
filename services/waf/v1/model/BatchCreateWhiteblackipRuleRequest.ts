import { BacthCreateWhiteBlackIpRuleRequestBody } from './BacthCreateWhiteBlackIpRuleRequestBody';


export class BatchCreateWhiteblackipRuleRequest {
    public policyids?: string;
    private 'enterprise_project_id'?: string;
    private 'Content-Type'?: string;
    public body?: BacthCreateWhiteBlackIpRuleRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withPolicyids(policyids: string): BatchCreateWhiteblackipRuleRequest {
        this['policyids'] = policyids;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchCreateWhiteblackipRuleRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withContentType(contentType: string): BatchCreateWhiteblackipRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: BacthCreateWhiteBlackIpRuleRequestBody): BatchCreateWhiteblackipRuleRequest {
        this['body'] = body;
        return this;
    }
}