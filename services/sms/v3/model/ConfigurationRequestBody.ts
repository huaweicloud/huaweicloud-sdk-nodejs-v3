import { ConfigBody } from './ConfigBody';


export class ConfigurationRequestBody {
    public configurations: Array<ConfigBody>;
    public constructor(configurations?: any) { 
        this['configurations'] = configurations;
    }
    public withConfigurations(configurations: Array<ConfigBody>): ConfigurationRequestBody {
        this['configurations'] = configurations;
        return this;
    }
}