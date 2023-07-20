

export class UpdatePolicyProtectHostRequest {
    private 'Content-Type'?: string;
    private 'enterprise_project_id'?: string;
    private 'policy_id'?: string;
    public hosts?: string;
    public constructor(contentType?: string, policyId?: string, hosts?: string) { 
        this['Content-Type'] = contentType;
        this['policy_id'] = policyId;
        this['hosts'] = hosts;
    }
    public withContentType(contentType: string): UpdatePolicyProtectHostRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdatePolicyProtectHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyId(policyId: string): UpdatePolicyProtectHostRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withHosts(hosts: string): UpdatePolicyProtectHostRequest {
        this['hosts'] = hosts;
        return this;
    }
}