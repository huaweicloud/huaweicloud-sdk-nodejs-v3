import { ResponseData } from './ResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAntiVirusSwitchResponse extends SdkResponse {
    public data?: ResponseData;
    public constructor() { 
        super();
    }
    public withData(data: ResponseData): UpdateAntiVirusSwitchResponse {
        this['data'] = data;
        return this;
    }
}