

export class ListProtectionPolicyRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'policy_name'?: string;
    private 'protect_policy_id'?: string;
    private 'operating_system'?: string;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): ListProtectionPolicyRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListProtectionPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListProtectionPolicyRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProtectionPolicyRequest {
        this['limit'] = limit;
        return this;
    }
    public withPolicyName(policyName: string): ListProtectionPolicyRequest {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withProtectPolicyId(protectPolicyId: string): ListProtectionPolicyRequest {
        this['protect_policy_id'] = protectPolicyId;
        return this;
    }
    public set protectPolicyId(protectPolicyId: string  | undefined) {
        this['protect_policy_id'] = protectPolicyId;
    }
    public get protectPolicyId(): string | undefined {
        return this['protect_policy_id'];
    }
    public withOperatingSystem(operatingSystem: string): ListProtectionPolicyRequest {
        this['operating_system'] = operatingSystem;
        return this;
    }
    public set operatingSystem(operatingSystem: string  | undefined) {
        this['operating_system'] = operatingSystem;
    }
    public get operatingSystem(): string | undefined {
        return this['operating_system'];
    }
}