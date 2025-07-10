import { AlarmInfoDTO } from './AlarmInfoDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAlarmResponse extends SdkResponse {
    public data?: AlarmInfoDTO;
    public constructor() { 
        super();
    }
    public withData(data: AlarmInfoDTO): ShowAlarmResponse {
        this['data'] = data;
        return this;
    }
}