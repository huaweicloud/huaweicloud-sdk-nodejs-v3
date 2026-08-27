import { UpdateScreenRecordsTrafficLimitConfigRequestBodyConfigs } from './UpdateScreenRecordsTrafficLimitConfigRequestBodyConfigs';


export class UpdateScreenRecordsTrafficLimitConfigRequestBody {
    public configs?: Array<UpdateScreenRecordsTrafficLimitConfigRequestBodyConfigs>;
    public constructor() { 
    }
    public withConfigs(configs: Array<UpdateScreenRecordsTrafficLimitConfigRequestBodyConfigs>): UpdateScreenRecordsTrafficLimitConfigRequestBody {
        this['configs'] = configs;
        return this;
    }
}