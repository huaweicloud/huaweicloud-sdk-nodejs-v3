

export class OrganizationPolicyAssignmentStatusResponse {
    private 'organization_policy_assignment_id'?: string | undefined;
    private 'organization_policy_assignment_name'?: string | undefined;
    private 'organization_policy_assignment_status'?: string | undefined;
    private 'error_code'?: string | undefined;
    private 'error_message'?: string | undefined;
    private 'created_at'?: string | undefined;
    private 'updated_at'?: string | undefined;
    public constructor() { 
    }
    public withOrganizationPolicyAssignmentId(organizationPolicyAssignmentId: string): OrganizationPolicyAssignmentStatusResponse {
        this['organization_policy_assignment_id'] = organizationPolicyAssignmentId;
        return this;
    }
    public set organizationPolicyAssignmentId(organizationPolicyAssignmentId: string | undefined) {
        this['organization_policy_assignment_id'] = organizationPolicyAssignmentId;
    }
    public get organizationPolicyAssignmentId() {
        return this['organization_policy_assignment_id'];
    }
    public withOrganizationPolicyAssignmentName(organizationPolicyAssignmentName: string): OrganizationPolicyAssignmentStatusResponse {
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
        return this;
    }
    public set organizationPolicyAssignmentName(organizationPolicyAssignmentName: string | undefined) {
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
    }
    public get organizationPolicyAssignmentName() {
        return this['organization_policy_assignment_name'];
    }
    public withOrganizationPolicyAssignmentStatus(organizationPolicyAssignmentStatus: string): OrganizationPolicyAssignmentStatusResponse {
        this['organization_policy_assignment_status'] = organizationPolicyAssignmentStatus;
        return this;
    }
    public set organizationPolicyAssignmentStatus(organizationPolicyAssignmentStatus: string | undefined) {
        this['organization_policy_assignment_status'] = organizationPolicyAssignmentStatus;
    }
    public get organizationPolicyAssignmentStatus() {
        return this['organization_policy_assignment_status'];
    }
    public withErrorCode(errorCode: string): OrganizationPolicyAssignmentStatusResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode() {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): OrganizationPolicyAssignmentStatusResponse {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage() {
        return this['error_message'];
    }
    public withCreatedAt(createdAt: string): OrganizationPolicyAssignmentStatusResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): OrganizationPolicyAssignmentStatusResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}