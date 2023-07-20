

export class OrganizationPolicyAssignmentDetailedStatusResponse {
    private 'domain_id'?: string;
    private 'policy_assignment_id'?: string;
    private 'policy_assignment_name'?: string;
    private 'member_account_policy_assignment_status'?: string;
    private 'error_code'?: string;
    private 'error_message'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withDomainId(domainId: string): OrganizationPolicyAssignmentDetailedStatusResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPolicyAssignmentId(policyAssignmentId: string): OrganizationPolicyAssignmentDetailedStatusResponse {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string  | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId(): string | undefined {
        return this['policy_assignment_id'];
    }
    public withPolicyAssignmentName(policyAssignmentName: string): OrganizationPolicyAssignmentDetailedStatusResponse {
        this['policy_assignment_name'] = policyAssignmentName;
        return this;
    }
    public set policyAssignmentName(policyAssignmentName: string  | undefined) {
        this['policy_assignment_name'] = policyAssignmentName;
    }
    public get policyAssignmentName(): string | undefined {
        return this['policy_assignment_name'];
    }
    public withMemberAccountPolicyAssignmentStatus(memberAccountPolicyAssignmentStatus: string): OrganizationPolicyAssignmentDetailedStatusResponse {
        this['member_account_policy_assignment_status'] = memberAccountPolicyAssignmentStatus;
        return this;
    }
    public set memberAccountPolicyAssignmentStatus(memberAccountPolicyAssignmentStatus: string  | undefined) {
        this['member_account_policy_assignment_status'] = memberAccountPolicyAssignmentStatus;
    }
    public get memberAccountPolicyAssignmentStatus(): string | undefined {
        return this['member_account_policy_assignment_status'];
    }
    public withErrorCode(errorCode: string): OrganizationPolicyAssignmentDetailedStatusResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): OrganizationPolicyAssignmentDetailedStatusResponse {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withCreatedAt(createdAt: string): OrganizationPolicyAssignmentDetailedStatusResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): OrganizationPolicyAssignmentDetailedStatusResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}