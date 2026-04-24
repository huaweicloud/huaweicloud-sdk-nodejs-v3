import { ScreenRecordsConfigResultReqConfigs } from './ScreenRecordsConfigResultReqConfigs';


export class ScreenRecordsConfigResultReq {
    public configs?: Array<ScreenRecordsConfigResultReqConfigs>;
    public constructor() { 
    }
    public withConfigs(configs: Array<ScreenRecordsConfigResultReqConfigs>): ScreenRecordsConfigResultReq {
        this['configs'] = configs;
        return this;
    }
}