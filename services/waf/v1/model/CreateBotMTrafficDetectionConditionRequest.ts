import { SaveTrafficDetectionConditionRequestBody } from './SaveTrafficDetectionConditionRequestBody';


export class CreateBotMTrafficDetectionConditionRequest {
    private 'policy_id'?: string;
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    public body?: SaveTrafficDetectionConditionRequestBody;
    public constructor(policyId?: string, contentType?: string) { 
        this['policy_id'] = policyId;
        this['Content-Type'] = contentType;
    }
    public withPolicyId(policyId: string): CreateBotMTrafficDetectionConditionRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withContentType(contentType: string): CreateBotMTrafficDetectionConditionRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateBotMTrafficDetectionConditionRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: SaveTrafficDetectionConditionRequestBody): CreateBotMTrafficDetectionConditionRequest {
        this['body'] = body;
        return this;
    }
}