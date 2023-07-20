

export class AggregatePolicyStatesRequest {
    private 'aggregator_id'?: string;
    private 'account_id'?: string;
    private 'group_by_key'?: string;
    public constructor(aggregatorId?: string) { 
        this['aggregator_id'] = aggregatorId;
    }
    public withAggregatorId(aggregatorId: string): AggregatePolicyStatesRequest {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string  | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId(): string | undefined {
        return this['aggregator_id'];
    }
    public withAccountId(accountId: string): AggregatePolicyStatesRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withGroupByKey(groupByKey: string): AggregatePolicyStatesRequest {
        this['group_by_key'] = groupByKey;
        return this;
    }
    public set groupByKey(groupByKey: string  | undefined) {
        this['group_by_key'] = groupByKey;
    }
    public get groupByKey(): string | undefined {
        return this['group_by_key'];
    }
}