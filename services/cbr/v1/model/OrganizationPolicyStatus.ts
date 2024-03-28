

export class OrganizationPolicyStatus {
    private 'policy_id'?: string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    public status?: string;
    public constructor(policyId?: string, domainId?: string, projectId?: string, status?: string) { 
        this['policy_id'] = policyId;
        this['domain_id'] = domainId;
        this['project_id'] = projectId;
        this['status'] = status;
    }
    public withPolicyId(policyId: string): OrganizationPolicyStatus {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withDomainId(domainId: string): OrganizationPolicyStatus {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): OrganizationPolicyStatus {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStatus(status: string): OrganizationPolicyStatus {
        this['status'] = status;
        return this;
    }
}