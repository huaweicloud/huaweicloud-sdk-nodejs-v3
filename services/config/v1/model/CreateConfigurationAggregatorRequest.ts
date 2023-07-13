import { ConfigurationAggregatorRequest } from './ConfigurationAggregatorRequest';


export class CreateConfigurationAggregatorRequest {
    public body?: ConfigurationAggregatorRequest;
    public constructor() { 
    }
    public withBody(body: ConfigurationAggregatorRequest): CreateConfigurationAggregatorRequest {
        this['body'] = body;
        return this;
    }
}