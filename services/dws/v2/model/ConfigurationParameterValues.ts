import { ConfigurationParameterValue } from './ConfigurationParameterValue';


export class ConfigurationParameterValues {
    public configurations: Array<ConfigurationParameterValue>;
    public constructor(configurations?: any) { 
        this['configurations'] = configurations;
    }
    public withConfigurations(configurations: Array<ConfigurationParameterValue>): ConfigurationParameterValues {
        this['configurations'] = configurations;
        return this;
    }
}