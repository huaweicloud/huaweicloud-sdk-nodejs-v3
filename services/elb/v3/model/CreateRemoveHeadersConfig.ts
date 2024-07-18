import { CreateRemoveHeaderConfig } from './CreateRemoveHeaderConfig';


export class CreateRemoveHeadersConfig {
    public configs?: Array<CreateRemoveHeaderConfig>;
    public constructor(configs?: Array<CreateRemoveHeaderConfig>) { 
        this['configs'] = configs;
    }
    public withConfigs(configs: Array<CreateRemoveHeaderConfig>): CreateRemoveHeadersConfig {
        this['configs'] = configs;
        return this;
    }
}