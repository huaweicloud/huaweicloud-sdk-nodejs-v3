import { ConfigurationDetail } from './ConfigurationDetail';


export class ConfigurationInfoDto {
    public configuration?: Array<ConfigurationDetail>;
    public constructor() { 
    }
    public withConfiguration(configuration: Array<ConfigurationDetail>): ConfigurationInfoDto {
        this['configuration'] = configuration;
        return this;
    }
}