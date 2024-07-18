import { InsertHeaderConfig } from './InsertHeaderConfig';


export class InsertHeadersConfig {
    public configs?: Array<InsertHeaderConfig>;
    public constructor(configs?: Array<InsertHeaderConfig>) { 
        this['configs'] = configs;
    }
    public withConfigs(configs: Array<InsertHeaderConfig>): InsertHeadersConfig {
        this['configs'] = configs;
        return this;
    }
}