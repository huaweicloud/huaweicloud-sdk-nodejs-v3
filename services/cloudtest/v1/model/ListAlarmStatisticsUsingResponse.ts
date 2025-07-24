import { AlertStatisticsDto } from './AlertStatisticsDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmStatisticsUsingResponse extends SdkResponse {
    public body?: Array<AlertStatisticsDto>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<AlertStatisticsDto>): ListAlarmStatisticsUsingResponse {
        this['body'] = body;
        return this;
    }
}