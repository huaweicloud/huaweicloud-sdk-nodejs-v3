

export class ListRemediationExceptionsRequest {
    private 'policy_assignment_id'?: string;
    public limit?: number;
    public marker?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public constructor(policyAssignmentId?: string) { 
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public withPolicyAssignmentId(policyAssignmentId: string): ListRemediationExceptionsRequest {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string  | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId(): string | undefined {
        return this['policy_assignment_id'];
    }
    public withLimit(limit: number): ListRemediationExceptionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListRemediationExceptionsRequest {
        this['marker'] = marker;
        return this;
    }
    public withResourceId(resourceId: string): ListRemediationExceptionsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ListRemediationExceptionsRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
}