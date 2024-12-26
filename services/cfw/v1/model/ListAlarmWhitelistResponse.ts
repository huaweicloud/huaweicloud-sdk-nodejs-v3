import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmWhitelistResponse extends SdkResponse {
    public data?: PageInfo;
    public constructor() { 
        super();
    }
    public withData(data: PageInfo): ListAlarmWhitelistResponse {
        this['data'] = data;
        return this;
    }
}