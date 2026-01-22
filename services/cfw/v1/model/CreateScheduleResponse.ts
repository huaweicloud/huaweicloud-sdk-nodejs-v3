import { ScheduleRespData } from './ScheduleRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateScheduleResponse extends SdkResponse {
    public data?: ScheduleRespData;
    public constructor() { 
        super();
    }
    public withData(data: ScheduleRespData): CreateScheduleResponse {
        this['data'] = data;
        return this;
    }
}