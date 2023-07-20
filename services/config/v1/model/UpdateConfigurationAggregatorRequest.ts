import { ConfigurationAggregatorRequest } from './ConfigurationAggregatorRequest';


export class UpdateConfigurationAggregatorRequest {
    private 'aggregator_id'?: string;
    public body?: ConfigurationAggregatorRequest;
    public constructor(aggregatorId?: string) { 
        this['aggregator_id'] = aggregatorId;
    }
    public withAggregatorId(aggregatorId: string): UpdateConfigurationAggregatorRequest {
        this['aggregator_id'] = aggregatorId;
        return this;
    }
    public set aggregatorId(aggregatorId: string  | undefined) {
        this['aggregator_id'] = aggregatorId;
    }
    public get aggregatorId(): string | undefined {
        return this['aggregator_id'];
    }
    public withBody(body: ConfigurationAggregatorRequest): UpdateConfigurationAggregatorRequest {
        this['body'] = body;
        return this;
    }
}