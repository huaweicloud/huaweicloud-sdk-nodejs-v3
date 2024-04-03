

export class ShowOrganizationPolicyAssignmentDetailedStatusRequest {
    private 'organization_id'?: string;
    private 'organization_policy_assignment_name'?: string;
    private 'organization_policy_assignment_id'?: string;
    public status?: ShowOrganizationPolicyAssignmentDetailedStatusRequestStatusEnum | string;
    public limit?: number;
    public marker?: string;
    public constructor(organizationId?: string, organizationPolicyAssignmentName?: string) { 
        this['organization_id'] = organizationId;
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
    }
    public withOrganizationId(organizationId: string): ShowOrganizationPolicyAssignmentDetailedStatusRequest {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withOrganizationPolicyAssignmentName(organizationPolicyAssignmentName: string): ShowOrganizationPolicyAssignmentDetailedStatusRequest {
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
        return this;
    }
    public set organizationPolicyAssignmentName(organizationPolicyAssignmentName: string  | undefined) {
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
    }
    public get organizationPolicyAssignmentName(): string | undefined {
        return this['organization_policy_assignment_name'];
    }
    public withOrganizationPolicyAssignmentId(organizationPolicyAssignmentId: string): ShowOrganizationPolicyAssignmentDetailedStatusRequest {
        this['organization_policy_assignment_id'] = organizationPolicyAssignmentId;
        return this;
    }
    public set organizationPolicyAssignmentId(organizationPolicyAssignmentId: string  | undefined) {
        this['organization_policy_assignment_id'] = organizationPolicyAssignmentId;
    }
    public get organizationPolicyAssignmentId(): string | undefined {
        return this['organization_policy_assignment_id'];
    }
    public withStatus(status: ShowOrganizationPolicyAssignmentDetailedStatusRequestStatusEnum | string): ShowOrganizationPolicyAssignmentDetailedStatusRequest {
        this['status'] = status;
        return this;
    }
    public withLimit(limit: number): ShowOrganizationPolicyAssignmentDetailedStatusRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ShowOrganizationPolicyAssignmentDetailedStatusRequest {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowOrganizationPolicyAssignmentDetailedStatusRequestStatusEnum {
    CREATE_SUCCESSFUL = 'CREATE_SUCCESSFUL',
    CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS',
    CREATE_FAILED = 'CREATE_FAILED',
    DELETE_SUCCESSFUL = 'DELETE_SUCCESSFUL',
    DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS',
    DELETE_FAILED = 'DELETE_FAILED',
    UPDATE_SUCCESSFUL = 'UPDATE_SUCCESSFUL',
    UPDATE_IN_PROGRESS = 'UPDATE_IN_PROGRESS',
    UPDATE_FAILED = 'UPDATE_FAILED'
}
