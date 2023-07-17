

export class DisablePolicyAssignmentRequest {
    private 'policy_assignment_id': string | undefined;
    public constructor(policyAssignmentId?: any) { 
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public withPolicyAssignmentId(policyAssignmentId: string): DisablePolicyAssignmentRequest {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId() {
        return this['policy_assignment_id'];
    }
}