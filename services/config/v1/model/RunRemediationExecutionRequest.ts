import { RemediationRunRequestBody } from './RemediationRunRequestBody';


export class RunRemediationExecutionRequest {
    private 'policy_assignment_id'?: string;
    public body?: RemediationRunRequestBody;
    public constructor(policyAssignmentId?: string) { 
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public withPolicyAssignmentId(policyAssignmentId: string): RunRemediationExecutionRequest {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string  | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId(): string | undefined {
        return this['policy_assignment_id'];
    }
    public withBody(body: RemediationRunRequestBody): RunRemediationExecutionRequest {
        this['body'] = body;
        return this;
    }
}