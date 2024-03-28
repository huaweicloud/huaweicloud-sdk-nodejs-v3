

export class DeleteOrganizationPolicyRequest {
    private 'organization_policy_id'?: string;
    public constructor(organizationPolicyId?: string) { 
        this['organization_policy_id'] = organizationPolicyId;
    }
    public withOrganizationPolicyId(organizationPolicyId: string): DeleteOrganizationPolicyRequest {
        this['organization_policy_id'] = organizationPolicyId;
        return this;
    }
    public set organizationPolicyId(organizationPolicyId: string  | undefined) {
        this['organization_policy_id'] = organizationPolicyId;
    }
    public get organizationPolicyId(): string | undefined {
        return this['organization_policy_id'];
    }
}