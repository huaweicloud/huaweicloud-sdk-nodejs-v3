

export class AggregatePolicyAssignmentDetailRequest {
    private 'aggregator_id': string | undefined;
    private 'account_id': string | undefined;
    private 'policy_assignment_id': string | undefined;
    public constructor(aggregatorId?: any, accountId?: any, policyAssignmentId?: any) { 
        this['aggregator_id'] = aggregatorId;
        this['account_id'] = accountId;
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public withAggregatorId(aggregatorId: string): AggregatePolicyAssignmentDetailRequest {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId() {
        return this['aggregator_id'];
    }
    public withAccountId(accountId: string): AggregatePolicyAssignmentDetailRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId() {
        return this['account_id'];
    }
    public withPolicyAssignmentId(policyAssignmentId: string): AggregatePolicyAssignmentDetailRequest {
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