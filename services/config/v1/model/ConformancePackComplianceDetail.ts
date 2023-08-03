

export class ConformancePackComplianceDetail {
    private 'policy_assignment_id'?: string;
    private 'policy_assignment_name'?: string;
    private 'resource_id'?: string;
    private 'compliance_state'?: string;
    private 'evaluation_time'?: string;
    public constructor() { 
    }
    public withPolicyAssignmentId(policyAssignmentId: string): ConformancePackComplianceDetail {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string  | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId(): string | undefined {
        return this['policy_assignment_id'];
    }
    public withPolicyAssignmentName(policyAssignmentName: string): ConformancePackComplianceDetail {
        this['policy_assignment_name'] = policyAssignmentName;
        return this;
    }
    public set policyAssignmentName(policyAssignmentName: string  | undefined) {
        this['policy_assignment_name'] = policyAssignmentName;
    }
    public get policyAssignmentName(): string | undefined {
        return this['policy_assignment_name'];
    }
    public withResourceId(resourceId: string): ConformancePackComplianceDetail {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withComplianceState(complianceState: string): ConformancePackComplianceDetail {
        this['compliance_state'] = complianceState;
        return this;
    }
    public set complianceState(complianceState: string  | undefined) {
        this['compliance_state'] = complianceState;
    }
    public get complianceState(): string | undefined {
        return this['compliance_state'];
    }
    public withEvaluationTime(evaluationTime: string): ConformancePackComplianceDetail {
        this['evaluation_time'] = evaluationTime;
        return this;
    }
    public set evaluationTime(evaluationTime: string  | undefined) {
        this['evaluation_time'] = evaluationTime;
    }
    public get evaluationTime(): string | undefined {
        return this['evaluation_time'];
    }
}