import { AddEipAlarmWhitelistRespData } from './AddEipAlarmWhitelistRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddEipAlarmWhitelistResponse extends SdkResponse {
    public data?: AddEipAlarmWhitelistRespData;
    public constructor() { 
        super();
    }
    public withData(data: AddEipAlarmWhitelistRespData): AddEipAlarmWhitelistResponse {
        this['data'] = data;
        return this;
    }
}