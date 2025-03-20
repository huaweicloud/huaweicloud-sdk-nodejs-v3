import { AlarmHandleHistory } from './AlarmHandleHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmHandleHistoriesResponse extends SdkResponse {
    public count?: number;
    private 'alarm_handle_histories'?: Array<AlarmHandleHistory>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAlarmHandleHistoriesResponse {
        this['count'] = count;
        return this;
    }
    public withAlarmHandleHistories(alarmHandleHistories: Array<AlarmHandleHistory>): ListAlarmHandleHistoriesResponse {
        this['alarm_handle_histories'] = alarmHandleHistories;
        return this;
    }
    public set alarmHandleHistories(alarmHandleHistories: Array<AlarmHandleHistory>  | undefined) {
        this['alarm_handle_histories'] = alarmHandleHistories;
    }
    public get alarmHandleHistories(): Array<AlarmHandleHistory> | undefined {
        return this['alarm_handle_histories'];
    }
}