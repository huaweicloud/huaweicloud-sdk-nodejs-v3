import { BatchCreateRemediationExceptionsRequestBody } from './BatchCreateRemediationExceptionsRequestBody';


export class BatchCreateRemediationExceptionsRequest {
    private 'policy_assignment_id'?: string;
    public body?: BatchCreateRemediationExceptionsRequestBody;
    public constructor(policyAssignmentId?: string) { 
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public withPolicyAssignmentId(policyAssignmentId: string): BatchCreateRemediationExceptionsRequest {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string  | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId(): string | undefined {
        return this['policy_assignment_id'];
    }
    public withBody(body: BatchCreateRemediationExceptionsRequestBody): BatchCreateRemediationExceptionsRequest {
        this['body'] = body;
        return this;
    }
}