import { PolicyAssignmentRequestBody } from './PolicyAssignmentRequestBody';


export class UpdatePolicyAssignmentRequest {
    private 'policy_assignment_id'?: string;
    public body?: PolicyAssignmentRequestBody;
    public constructor(policyAssignmentId?: string) { 
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public withPolicyAssignmentId(policyAssignmentId: string): UpdatePolicyAssignmentRequest {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string  | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId(): string | undefined {
        return this['policy_assignment_id'];
    }
    public withBody(body: PolicyAssignmentRequestBody): UpdatePolicyAssignmentRequest {
        this['body'] = body;
        return this;
    }
}