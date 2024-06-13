import { BatchDeleteRemediationExceptionsRequestBody } from './BatchDeleteRemediationExceptionsRequestBody';


export class BatchDeleteRemediationExceptionsRequest {
    private 'policy_assignment_id'?: string;
    public body?: BatchDeleteRemediationExceptionsRequestBody;
    public constructor(policyAssignmentId?: string) { 
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public withPolicyAssignmentId(policyAssignmentId: string): BatchDeleteRemediationExceptionsRequest {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string  | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId(): string | undefined {
        return this['policy_assignment_id'];
    }
    public withBody(body: BatchDeleteRemediationExceptionsRequestBody): BatchDeleteRemediationExceptionsRequest {
        this['body'] = body;
        return this;
    }
}