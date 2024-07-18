import { CreateInsertHeaderConfig } from './CreateInsertHeaderConfig';


export class CreateInsertHeadersConfig {
    public configs?: Array<CreateInsertHeaderConfig>;
    public constructor(configs?: Array<CreateInsertHeaderConfig>) { 
        this['configs'] = configs;
    }
    public withConfigs(configs: Array<CreateInsertHeaderConfig>): CreateInsertHeadersConfig {
        this['configs'] = configs;
        return this;
    }
}