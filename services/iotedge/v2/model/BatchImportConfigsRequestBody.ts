import { BatchImportConfigRequestBody } from './BatchImportConfigRequestBody';


export class BatchImportConfigsRequestBody {
    public configs?: Array<BatchImportConfigRequestBody>;
    public constructor() { 
    }
    public withConfigs(configs: Array<BatchImportConfigRequestBody>): BatchImportConfigsRequestBody {
        this['configs'] = configs;
        return this;
    }
}