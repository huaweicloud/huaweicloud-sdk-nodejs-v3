

export class AggregatePolicyAssignmentDetailRequest {
    private 'aggregator_id'?: string;
    private 'account_id'?: string;
    private 'policy_assignment_id'?: string;
    public constructor(aggregatorId?: string, accountId?: string, policyAssignmentId?: string) { 
        this['aggregator_id'] = aggregatorId;
        this['account_id'] = accountId;
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public withAggregatorId(aggregatorId: string): AggregatePolicyAssignmentDetailRequest {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string  | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId(): string | undefined {
        return this['aggregator_id'];
    }
    public withAccountId(accountId: string): AggregatePolicyAssignmentDetailRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withPolicyAssignmentId(policyAssignmentId: string): AggregatePolicyAssignmentDetailRequest {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string  | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId(): string | undefined {
        return this['policy_assignment_id'];
    }
}