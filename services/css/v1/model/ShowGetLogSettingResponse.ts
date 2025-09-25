import { LogConfiguration } from './LogConfiguration';
import { RealTimeLogCollect } from './RealTimeLogCollect';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGetLogSettingResponse extends SdkResponse {
    public logConfiguration?: LogConfiguration;
    public realTimeLogCollectRecord?: RealTimeLogCollect;
    public constructor() { 
        super();
    }
    public withLogConfiguration(logConfiguration: LogConfiguration): ShowGetLogSettingResponse {
        this['logConfiguration'] = logConfiguration;
        return this;
    }
    public withRealTimeLogCollectRecord(realTimeLogCollectRecord: RealTimeLogCollect): ShowGetLogSettingResponse {
        this['realTimeLogCollectRecord'] = realTimeLogCollectRecord;
        return this;
    }
}