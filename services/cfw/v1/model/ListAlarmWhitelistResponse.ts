import { HttpListAlarmWhiteListResponseData } from './HttpListAlarmWhiteListResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmWhitelistResponse extends SdkResponse {
    public data?: HttpListAlarmWhiteListResponseData;
    public constructor() { 
        super();
    }
    public withData(data: HttpListAlarmWhiteListResponseData): ListAlarmWhitelistResponse {
        this['data'] = data;
        return this;
    }
}