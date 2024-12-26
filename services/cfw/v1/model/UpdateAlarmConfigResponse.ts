import { ResponseData } from './ResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAlarmConfigResponse extends SdkResponse {
    public data?: ResponseData;
    public constructor() { 
        super();
    }
    public withData(data: ResponseData): UpdateAlarmConfigResponse {
        this['data'] = data;
        return this;
    }
}