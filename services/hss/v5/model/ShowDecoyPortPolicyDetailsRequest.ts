

export class ShowDecoyPortPolicyDetailsRequest {
    private 'enterprise_project_id'?: string;
    private 'policy_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(policyId?: string, offset?: number, limit?: number) { 
        this['policy_id'] = policyId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowDecoyPortPolicyDetailsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): ShowDecoyPortPolicyDetailsRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withOffset(offset: number): ShowDecoyPortPolicyDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowDecoyPortPolicyDetailsRequest {
        this['limit'] = limit;
        return this;
    }
}