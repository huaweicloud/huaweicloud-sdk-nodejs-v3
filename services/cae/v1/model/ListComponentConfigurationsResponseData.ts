import { ConfigurationDataMetadata } from './ConfigurationDataMetadata';
import { ConfigurationResponseDataSpec } from './ConfigurationResponseDataSpec';


export class ListComponentConfigurationsResponseData {
    public spec?: ConfigurationResponseDataSpec;
    public metadata?: ConfigurationDataMetadata;
    public constructor() { 
    }
    public withSpec(spec: ConfigurationResponseDataSpec): ListComponentConfigurationsResponseData {
        this['spec'] = spec;
        return this;
    }
    public withMetadata(metadata: ConfigurationDataMetadata): ListComponentConfigurationsResponseData {
        this['metadata'] = metadata;
        return this;
    }
}