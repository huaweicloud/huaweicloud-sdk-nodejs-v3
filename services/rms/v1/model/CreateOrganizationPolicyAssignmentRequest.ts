import { OrganizationPolicyAssignmentRequest } from './OrganizationPolicyAssignmentRequest';


export class CreateOrganizationPolicyAssignmentRequest {
    private 'organization_id': string | undefined;
    public body?: OrganizationPolicyAssignmentRequest;
    public constructor(organizationId?: any) { 
        this['organization_id'] = organizationId;
    }
    public withOrganizationId(organizationId: string): CreateOrganizationPolicyAssignmentRequest {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId() {
        return this['organization_id'];
    }
    public withBody(body: OrganizationPolicyAssignmentRequest): CreateOrganizationPolicyAssignmentRequest {
        this['body'] = body;
        return this;
    }
}