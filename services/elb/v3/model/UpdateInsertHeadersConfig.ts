import { UpdateInsertHeaderConfig } from './UpdateInsertHeaderConfig';


export class UpdateInsertHeadersConfig {
    public configs?: Array<UpdateInsertHeaderConfig>;
    public constructor(configs?: Array<UpdateInsertHeaderConfig>) { 
        this['configs'] = configs;
    }
    public withConfigs(configs: Array<UpdateInsertHeaderConfig>): UpdateInsertHeadersConfig {
        this['configs'] = configs;
        return this;
    }
}