

export class ShowOrganizationPolicyAssignmentDetailedStatusRequest {
    private 'organization_id': string | undefined;
    private 'organization_policy_assignment_name': string | undefined;
    public status?: ShowOrganizationPolicyAssignmentDetailedStatusRequestStatusEnum;
    public limit?: number;
    public marker?: string;
    public constructor(organizationId?: any, organizationPolicyAssignmentName?: any) { 
        this['organization_id'] = organizationId;
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
    }
    public withOrganizationId(organizationId: string): ShowOrganizationPolicyAssignmentDetailedStatusRequest {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId() {
        return this['organization_id'];
    }
    public withOrganizationPolicyAssignmentName(organizationPolicyAssignmentName: string): ShowOrganizationPolicyAssignmentDetailedStatusRequest {
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
        return this;
    }
    public set organizationPolicyAssignmentName(organizationPolicyAssignmentName: string | undefined) {
        this['organization_policy_assignment_name'] = organizationPolicyAssignmentName;
    }
    public get organizationPolicyAssignmentName() {
        return this['organization_policy_assignment_name'];
    }
    public withStatus(status: ShowOrganizationPolicyAssignmentDetailedStatusRequestStatusEnum): ShowOrganizationPolicyAssignmentDetailedStatusRequest {
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
