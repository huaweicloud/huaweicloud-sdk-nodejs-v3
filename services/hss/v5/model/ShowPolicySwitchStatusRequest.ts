

export class ShowPolicySwitchStatusRequest {
    private 'enterprise_project_id'?: string;
    private 'policy_name'?: string;
    public constructor(enterpriseProjectId?: string, policyName?: string) { 
        this['enterprise_project_id'] = enterpriseProjectId;
        this['policy_name'] = policyName;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowPolicySwitchStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyName(policyName: string): ShowPolicySwitchStatusRequest {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
}