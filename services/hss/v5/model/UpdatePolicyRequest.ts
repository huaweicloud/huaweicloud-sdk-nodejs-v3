import { UpdatePolicyRequestBody } from './UpdatePolicyRequestBody';


export class UpdatePolicyRequest {
    private 'enterprise_project_id'?: string;
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    public body?: UpdatePolicyRequestBody;
    public constructor(policyId?: string, policyName?: string) { 
        this['policy_id'] = policyId;
        this['policy_name'] = policyName;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdatePolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): UpdatePolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): UpdatePolicyRequest {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withBody(body: UpdatePolicyRequestBody): UpdatePolicyRequest {
        this['body'] = body;
        return this;
    }
}