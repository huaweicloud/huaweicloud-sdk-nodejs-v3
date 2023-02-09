import { Configs } from './Configs';


export class ModifyDomainConfigRequestBody {
    public configs?: Configs;
    public constructor() { 
    }
    public withConfigs(configs: Configs): ModifyDomainConfigRequestBody {
        this['configs'] = configs;
        return this;
    }
}