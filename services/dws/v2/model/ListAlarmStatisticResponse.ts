import { AlarmStatisticResponse } from './AlarmStatisticResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmStatisticResponse extends SdkResponse {
    private 'alarm_statistics'?: Array<AlarmStatisticResponse>;
    public constructor() { 
        super();
    }
    public withAlarmStatistics(alarmStatistics: Array<AlarmStatisticResponse>): ListAlarmStatisticResponse {
        this['alarm_statistics'] = alarmStatistics;
        return this;
    }
    public set alarmStatistics(alarmStatistics: Array<AlarmStatisticResponse>  | undefined) {
        this['alarm_statistics'] = alarmStatistics;
    }
    public get alarmStatistics(): Array<AlarmStatisticResponse> | undefined {
        return this['alarm_statistics'];
    }
}