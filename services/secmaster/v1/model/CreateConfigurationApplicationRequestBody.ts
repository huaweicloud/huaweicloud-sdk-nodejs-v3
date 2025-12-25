import { ConfigurationDetail } from './ConfigurationDetail';


export class CreateConfigurationApplicationRequestBody {
    public configuration?: Array<ConfigurationDetail>;
    public constructor(configuration?: Array<ConfigurationDetail>) { 
        this['configuration'] = configuration;
    }
    public withConfiguration(configuration: Array<ConfigurationDetail>): CreateConfigurationApplicationRequestBody {
        this['configuration'] = configuration;
        return this;
    }
}