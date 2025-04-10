import { HoneypotPortPolicyContent } from './HoneypotPortPolicyContent';


export class ModifyDecoyPortPolicyRequest {
    private 'enterprise_project_id'?: string;
    private 'policy_id'?: string;
    public body?: HoneypotPortPolicyContent;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ModifyDecoyPortPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): ModifyDecoyPortPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: HoneypotPortPolicyContent): ModifyDecoyPortPolicyRequest {
        this['body'] = body;
        return this;
    }
}