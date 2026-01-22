import { ScheduleRespData } from './ScheduleRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteScheduleResponse extends SdkResponse {
    public data?: ScheduleRespData;
    public constructor() { 
        super();
    }
    public withData(data: ScheduleRespData): DeleteScheduleResponse {
        this['data'] = data;
        return this;
    }
}