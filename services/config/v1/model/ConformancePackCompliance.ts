

export class ConformancePackCompliance {
    private 'policy_assignment_id'?: string;
    private 'policy_assignment_name'?: string;
    private 'policy_assignment_compliance'?: string;
    public constructor() { 
    }
    public withPolicyAssignmentId(policyAssignmentId: string): ConformancePackCompliance {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string  | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId(): string | undefined {
        return this['policy_assignment_id'];
    }
    public withPolicyAssignmentName(policyAssignmentName: string): ConformancePackCompliance {
        this['policy_assignment_name'] = policyAssignmentName;
        return this;
    }
    public set policyAssignmentName(policyAssignmentName: string  | undefined) {
        this['policy_assignment_name'] = policyAssignmentName;
    }
    public get policyAssignmentName(): string | undefined {
        return this['policy_assignment_name'];
    }
    public withPolicyAssignmentCompliance(policyAssignmentCompliance: string): ConformancePackCompliance {
        this['policy_assignment_compliance'] = policyAssignmentCompliance;
        return this;
    }
    public set policyAssignmentCompliance(policyAssignmentCompliance: string  | undefined) {
        this['policy_assignment_compliance'] = policyAssignmentCompliance;
    }
    public get policyAssignmentCompliance(): string | undefined {
        return this['policy_assignment_compliance'];
    }
}