import { ScheduleRespData } from './ScheduleRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateScheduleResponse extends SdkResponse {
    public data?: ScheduleRespData;
    public constructor() { 
        super();
    }
    public withData(data: ScheduleRespData): UpdateScheduleResponse {
        this['data'] = data;
        return this;
    }
}