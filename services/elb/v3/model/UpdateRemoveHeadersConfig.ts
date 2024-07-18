import { UpdateRemoveHeaderConfig } from './UpdateRemoveHeaderConfig';


export class UpdateRemoveHeadersConfig {
    public configs?: Array<UpdateRemoveHeaderConfig>;
    public constructor(configs?: Array<UpdateRemoveHeaderConfig>) { 
        this['configs'] = configs;
    }
    public withConfigs(configs: Array<UpdateRemoveHeaderConfig>): UpdateRemoveHeadersConfig {
        this['configs'] = configs;
        return this;
    }
}