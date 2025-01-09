import { AlarmHistoryItem } from './AlarmHistoryItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmsResponse extends SdkResponse {
    private 'alarm_histories'?: Array<AlarmHistoryItem>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withAlarmHistories(alarmHistories: Array<AlarmHistoryItem>): ListAlarmsResponse {
        this['alarm_histories'] = alarmHistories;
        return this;
    }
    public set alarmHistories(alarmHistories: Array<AlarmHistoryItem>  | undefined) {
        this['alarm_histories'] = alarmHistories;
    }
    public get alarmHistories(): Array<AlarmHistoryItem> | undefined {
        return this['alarm_histories'];
    }
    public withCount(count: number): ListAlarmsResponse {
        this['count'] = count;
        return this;
    }
}