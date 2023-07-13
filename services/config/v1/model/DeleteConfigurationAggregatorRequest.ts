

export class DeleteConfigurationAggregatorRequest {
    private 'aggregator_id': string | undefined;
    public constructor(aggregatorId?: any) { 
        this['aggregator_id'] = aggregatorId;
    }
    public withAggregatorId(aggregatorId: string): DeleteConfigurationAggregatorRequest {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId() {
        return this['aggregator_id'];
    }
}