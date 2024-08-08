import { ConfigurationPrimitiveTypeHolderConfiguration } from './ConfigurationPrimitiveTypeHolderConfiguration';


export class ConfigurationPrimitiveTypeHolder {
    public configuration?: ConfigurationPrimitiveTypeHolderConfiguration;
    public constructor() { 
    }
    public withConfiguration(configuration: ConfigurationPrimitiveTypeHolderConfiguration): ConfigurationPrimitiveTypeHolder {
        this['configuration'] = configuration;
        return this;
    }
}