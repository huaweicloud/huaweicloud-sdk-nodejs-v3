import { OrganizationPolicyAssignmentRequest } from './OrganizationPolicyAssignmentRequest';


export class UpdateOrganizationPolicyAssignmentRequest {
    private 'organization_id'?: string;
    private 'organization_policy_assignment_id'?: string;
    public body?: OrganizationPolicyAssignmentRequest;
    public constructor(organizationId?: string, organizationPolicyAssignmentId?: string) { 
        this['organization_id'] = organizationId;
        this['organization_policy_assignment_id'] = organizationPolicyAssignmentId;
    }
    public withOrganizationId(organizationId: string): UpdateOrganizationPolicyAssignmentRequest {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withOrganizationPolicyAssignmentId(organizationPolicyAssignmentId: string): UpdateOrganizationPolicyAssignmentRequest {
        this['organization_policy_assignment_id'] = organizationPolicyAssignmentId;
        return this;
    }
    public set organizationPolicyAssignmentId(organizationPolicyAssignmentId: string  | undefined) {
        this['organization_policy_assignment_id'] = organizationPolicyAssignmentId;
    }
    public get organizationPolicyAssignmentId(): string | undefined {
        return this['organization_policy_assignment_id'];
    }
    public withBody(body: OrganizationPolicyAssignmentRequest): UpdateOrganizationPolicyAssignmentRequest {
        this['body'] = body;
        return this;
    }
}