import { BatchCopyConfigs } from './BatchCopyConfigs';


export class BatchCopyDRequestBody {
    public configs: BatchCopyConfigs;
    public constructor(configs?: any) { 
        this['configs'] = configs;
    }
    public withConfigs(configs: BatchCopyConfigs): BatchCopyDRequestBody {
        this['configs'] = configs;
        return this;
    }
}