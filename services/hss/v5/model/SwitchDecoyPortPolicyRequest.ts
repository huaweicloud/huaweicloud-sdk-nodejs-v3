

export class SwitchDecoyPortPolicyRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'policy_id'?: string;
    public enable?: boolean;
    public constructor(policyId?: string, enable?: boolean) { 
        this['policy_id'] = policyId;
        this['enable'] = enable;
    }
    public withRegion(region: string): SwitchDecoyPortPolicyRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SwitchDecoyPortPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): SwitchDecoyPortPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withEnable(enable: boolean): SwitchDecoyPortPolicyRequest {
        this['enable'] = enable;
        return this;
    }
}