import { AlarmDetailResponse } from './AlarmDetailResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmDetailResponse extends SdkResponse {
    public count?: number;
    private 'alarm_details'?: Array<AlarmDetailResponse> | undefined;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAlarmDetailResponse {
        this['count'] = count;
        return this;
    }
    public withAlarmDetails(alarmDetails: Array<AlarmDetailResponse>): ListAlarmDetailResponse {
        this['alarm_details'] = alarmDetails;
        return this;
    }
    public set alarmDetails(alarmDetails: Array<AlarmDetailResponse> | undefined) {
        this['alarm_details'] = alarmDetails;
    }
    public get alarmDetails() {
        return this['alarm_details'];
    }
}