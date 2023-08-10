import { AlarmHistoryItemV2 } from './AlarmHistoryItemV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmHistoriesResponse extends SdkResponse {
    private 'alarm_histories'?: Array<AlarmHistoryItemV2>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withAlarmHistories(alarmHistories: Array<AlarmHistoryItemV2>): ListAlarmHistoriesResponse {
        this['alarm_histories'] = alarmHistories;
        return this;
    }
    public set alarmHistories(alarmHistories: Array<AlarmHistoryItemV2>  | undefined) {
        this['alarm_histories'] = alarmHistories;
    }
    public get alarmHistories(): Array<AlarmHistoryItemV2> | undefined {
        return this['alarm_histories'];
    }
    public withCount(count: number): ListAlarmHistoriesResponse {
        this['count'] = count;
        return this;
    }
}