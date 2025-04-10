

export class DeleteDecoyPortHostPolicyRequest {
    private 'enterprise_project_id'?: string;
    private 'policy_id'?: string;
    private 'host_id'?: string;
    public constructor(policyId?: string, hostId?: string) { 
        this['policy_id'] = policyId;
        this['host_id'] = hostId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteDecoyPortHostPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): DeleteDecoyPortHostPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withHostId(hostId: string): DeleteDecoyPortHostPolicyRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
}