import { RemoveHeaderConfig } from './RemoveHeaderConfig';


export class RemoveHeadersConfig {
    public configs?: Array<RemoveHeaderConfig>;
    public constructor(configs?: Array<RemoveHeaderConfig>) { 
        this['configs'] = configs;
    }
    public withConfigs(configs: Array<RemoveHeaderConfig>): RemoveHeadersConfig {
        this['configs'] = configs;
        return this;
    }
}