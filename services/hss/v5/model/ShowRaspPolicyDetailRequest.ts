

export class ShowRaspPolicyDetailRequest {
    private 'enterprise_project_id'?: string;
    private 'policy_id'?: string;
    public constructor(enterpriseProjectId?: string, policyId?: string) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['policy_id'] = policyId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowRaspPolicyDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): ShowRaspPolicyDetailRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
}