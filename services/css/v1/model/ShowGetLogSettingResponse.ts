import { LogConfiguration } from './LogConfiguration';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGetLogSettingResponse extends SdkResponse {
    public logConfiguration?: LogConfiguration;
    public constructor() { 
        super();
    }
    public withLogConfiguration(logConfiguration: LogConfiguration): ShowGetLogSettingResponse {
        this['logConfiguration'] = logConfiguration;
        return this;
    }
}