import { RemediationExecutionStatusesSummaryRequestBody } from './RemediationExecutionStatusesSummaryRequestBody';


export class CollectRemediationExecutionStatusesSummaryRequest {
    private 'policy_assignment_id'?: string;
    public limit?: number;
    public marker?: string;
    public body?: RemediationExecutionStatusesSummaryRequestBody;
    public constructor(policyAssignmentId?: string) { 
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public withPolicyAssignmentId(policyAssignmentId: string): CollectRemediationExecutionStatusesSummaryRequest {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string  | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId(): string | undefined {
        return this['policy_assignment_id'];
    }
    public withLimit(limit: number): CollectRemediationExecutionStatusesSummaryRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): CollectRemediationExecutionStatusesSummaryRequest {
        this['marker'] = marker;
        return this;
    }
    public withBody(body: RemediationExecutionStatusesSummaryRequestBody): CollectRemediationExecutionStatusesSummaryRequest {
        this['body'] = body;
        return this;
    }
}