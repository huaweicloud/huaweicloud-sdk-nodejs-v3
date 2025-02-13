import { ConfigurationDataMetadata } from './ConfigurationDataMetadata';
import { ConfigurationRequestDataSpec } from './ConfigurationRequestDataSpec';


export class ConfigurationData {
    public spec?: ConfigurationRequestDataSpec;
    public metadata?: ConfigurationDataMetadata;
    public constructor() { 
    }
    public withSpec(spec: ConfigurationRequestDataSpec): ConfigurationData {
        this['spec'] = spec;
        return this;
    }
    public withMetadata(metadata: ConfigurationDataMetadata): ConfigurationData {
        this['metadata'] = metadata;
        return this;
    }
}