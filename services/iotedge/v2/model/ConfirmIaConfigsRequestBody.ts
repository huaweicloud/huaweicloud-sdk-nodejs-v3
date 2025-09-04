import { ConfirmIaConfigRequestBody } from './ConfirmIaConfigRequestBody';


export class ConfirmIaConfigsRequestBody {
    public configs?: Array<ConfirmIaConfigRequestBody>;
    public constructor() { 
    }
    public withConfigs(configs: Array<ConfirmIaConfigRequestBody>): ConfirmIaConfigsRequestBody {
        this['configs'] = configs;
        return this;
    }
}