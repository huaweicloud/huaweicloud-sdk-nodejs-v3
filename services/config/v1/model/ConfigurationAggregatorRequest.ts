import { AccountAggregationSource } from './AccountAggregationSource';
import { ResourceTag } from './ResourceTag';


export class ConfigurationAggregatorRequest {
    private 'aggregator_name'?: string;
    private 'aggregator_type'?: string;
    private 'account_aggregation_sources'?: AccountAggregationSource;
    public tags?: Array<ResourceTag>;
    public constructor(aggregatorName?: string, aggregatorType?: string) { 
        this['aggregator_name'] = aggregatorName;
        this['aggregator_type'] = aggregatorType;
    }
    public withAggregatorName(aggregatorName: string): ConfigurationAggregatorRequest {
        this['aggregator_name'] = aggregatorName;
        return this;
    }
    public set aggregatorName(aggregatorName: string  | undefined) {
        this['aggregator_name'] = aggregatorName;
    }
    public get aggregatorName(): string | undefined {
        return this['aggregator_name'];
    }
    public withAggregatorType(aggregatorType: string): ConfigurationAggregatorRequest {
        this['aggregator_type'] = aggregatorType;
        return this;
    }
    public set aggregatorType(aggregatorType: string  | undefined) {
        this['aggregator_type'] = aggregatorType;
    }
    public get aggregatorType(): string | undefined {
        return this['aggregator_type'];
    }
    public withAccountAggregationSources(accountAggregationSources: AccountAggregationSource): ConfigurationAggregatorRequest {
        this['account_aggregation_sources'] = accountAggregationSources;
        return this;
    }
    public set accountAggregationSources(accountAggregationSources: AccountAggregationSource  | undefined) {
        this['account_aggregation_sources'] = accountAggregationSources;
    }
    public get accountAggregationSources(): AccountAggregationSource | undefined {
        return this['account_aggregation_sources'];
    }
    public withTags(tags: Array<ResourceTag>): ConfigurationAggregatorRequest {
        this['tags'] = tags;
        return this;
    }
}