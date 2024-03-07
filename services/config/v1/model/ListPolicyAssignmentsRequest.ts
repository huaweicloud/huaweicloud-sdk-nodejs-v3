

export class ListPolicyAssignmentsRequest {
    private 'policy_assignment_name'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withPolicyAssignmentName(policyAssignmentName: string): ListPolicyAssignmentsRequest {
        this['policy_assignment_name'] = policyAssignmentName;
        return this;
    }
    public set policyAssignmentName(policyAssignmentName: string  | undefined) {
        this['policy_assignment_name'] = policyAssignmentName;
    }
    public get policyAssignmentName(): string | undefined {
        return this['policy_assignment_name'];
    }
    public withLimit(limit: number): ListPolicyAssignmentsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListPolicyAssignmentsRequest {
        this['marker'] = marker;
        return this;
    }
}