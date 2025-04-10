

export class ListRaspPoliciesRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'os_type'?: string;
    public limit?: number;
    public offset?: number;
    private 'policy_name'?: string;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): ListRaspPoliciesRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListRaspPoliciesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOsType(osType: string): ListRaspPoliciesRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withLimit(limit: number): ListRaspPoliciesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRaspPoliciesRequest {
        this['offset'] = offset;
        return this;
    }
    public withPolicyName(policyName: string): ListRaspPoliciesRequest {
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