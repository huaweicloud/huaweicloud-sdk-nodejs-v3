import { AccountAggregationSource } from './AccountAggregationSource';


export class ConfigurationAggregatorRequest {
    private 'aggregator_name': string | undefined;
    private 'aggregator_type': string | undefined;
    private 'account_aggregation_sources'?: AccountAggregationSource | undefined;
    public constructor(aggregatorName?: any, aggregatorType?: any) { 
        this['aggregator_name'] = aggregatorName;
        this['aggregator_type'] = aggregatorType;
    }
    public withAggregatorName(aggregatorName: string): ConfigurationAggregatorRequest {
        this['aggregator_name'] = aggregatorName;
        return this;
    }
    public set aggregatorName(aggregatorName: string | undefined) {
        this['aggregator_name'] = aggregatorName;
    }
    public get aggregatorName() {
        return this['aggregator_name'];
    }
    public withAggregatorType(aggregatorType: string): ConfigurationAggregatorRequest {
        this['aggregator_type'] = aggregatorType;
        return this;
    }
    public set aggregatorType(aggregatorType: string | undefined) {
        this['aggregator_type'] = aggregatorType;
    }
    public get aggregatorType() {
        return this['aggregator_type'];
    }
    public withAccountAggregationSources(accountAggregationSources: AccountAggregationSource): ConfigurationAggregatorRequest {
        this['account_aggregation_sources'] = accountAggregationSources;
        return this;
    }
    public set accountAggregationSources(accountAggregationSources: AccountAggregationSource | undefined) {
        this['account_aggregation_sources'] = accountAggregationSources;
    }
    public get accountAggregationSources() {
        return this['account_aggregation_sources'];
    }
}