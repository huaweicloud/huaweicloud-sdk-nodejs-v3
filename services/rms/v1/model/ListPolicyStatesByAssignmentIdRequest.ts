

export class ListPolicyStatesByAssignmentIdRequest {
    private 'policy_assignment_id': string | undefined;
    private 'compliance_state'?: string | undefined;
    private 'resource_id'?: string | undefined;
    private 'resource_name'?: string | undefined;
    public limit?: number;
    public marker?: string;
    public constructor(policyAssignmentId?: any) { 
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public withPolicyAssignmentId(policyAssignmentId: string): ListPolicyStatesByAssignmentIdRequest {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId() {
        return this['policy_assignment_id'];
    }
    public withComplianceState(complianceState: string): ListPolicyStatesByAssignmentIdRequest {
        this['compliance_state'] = complianceState;
        return this;
    }
    public set complianceState(complianceState: string | undefined) {
        this['compliance_state'] = complianceState;
    }
    public get complianceState() {
        return this['compliance_state'];
    }
    public withResourceId(resourceId: string): ListPolicyStatesByAssignmentIdRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ListPolicyStatesByAssignmentIdRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withLimit(limit: number): ListPolicyStatesByAssignmentIdRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPolicyStatesByAssignmentIdRequest {
        this['marker'] = marker;
        return this;
    }
}