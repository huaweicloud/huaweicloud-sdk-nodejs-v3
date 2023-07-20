

export class ListConfigurationAggregatorsRequest {
    private 'aggregator_name'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withAggregatorName(aggregatorName: string): ListConfigurationAggregatorsRequest {
        this['aggregator_name'] = aggregatorName;
        return this;
    }
    public set aggregatorName(aggregatorName: string  | undefined) {
        this['aggregator_name'] = aggregatorName;
    }
    public get aggregatorName(): string | undefined {
        return this['aggregator_name'];
    }
    public withLimit(limit: number): ListConfigurationAggregatorsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListConfigurationAggregatorsRequest {
        this['marker'] = marker;
        return this;
    }
}