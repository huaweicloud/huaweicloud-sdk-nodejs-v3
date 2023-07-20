

export class ListOrganizationPolicyAssignmentsRequest {
    private 'organization_id'?: string;
    private 'organization_policy_assignment_name'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(organizationId?: string) { 
        this['organization_id'] = organizationId;
    }
    public withOrganizationId(organizationId: string): ListOrganizationPolicyAssignmentsRequest {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withOrganizationPolicyAssignmentName(organizationPolicyAssignmentName: string): ListOrganizationPolicyAssignmentsRequest {
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
        return this;
    }
    public set organizationPolicyAssignmentName(organizationPolicyAssignmentName: string  | undefined) {
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
    }
    public get organizationPolicyAssignmentName(): string | undefined {
        return this['organization_policy_assignment_name'];
    }
    public withLimit(limit: number): ListOrganizationPolicyAssignmentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListOrganizationPolicyAssignmentsRequest {
        this['marker'] = marker;
        return this;
    }
}