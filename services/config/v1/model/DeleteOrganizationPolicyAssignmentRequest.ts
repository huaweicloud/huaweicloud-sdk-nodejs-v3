

export class DeleteOrganizationPolicyAssignmentRequest {
    private 'organization_id': string | undefined;
    private 'organization_policy_assignment_id': string | undefined;
    public constructor(organizationId?: any, organizationPolicyAssignmentId?: any) { 
        this['organization_id'] = organizationId;
        this['organization_policy_assignment_id'] = organizationPolicyAssignmentId;
    }
    public withOrganizationId(organizationId: string): DeleteOrganizationPolicyAssignmentRequest {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId() {
        return this['organization_id'];
    }
    public withOrganizationPolicyAssignmentId(organizationPolicyAssignmentId: string): DeleteOrganizationPolicyAssignmentRequest {
        this['organization_policy_assignment_id'] = organizationPolicyAssignmentId;
        return this;
    }
    public set organizationPolicyAssignmentId(organizationPolicyAssignmentId: string | undefined) {
        this['organization_policy_assignment_id'] = organizationPolicyAssignmentId;
    }
    public get organizationPolicyAssignmentId() {
        return this['organization_policy_assignment_id'];
    }
}