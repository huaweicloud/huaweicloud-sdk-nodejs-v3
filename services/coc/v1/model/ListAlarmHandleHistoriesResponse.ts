import { AlarmHandleHistory } from './AlarmHandleHistory';
import { ResolvedRecordDTO } from './ResolvedRecordDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmHandleHistoriesResponse extends SdkResponse {
    public count?: number;
    private 'alarm_handle_histories'?: Array<AlarmHandleHistory>;
    private 'resolved_record'?: ResolvedRecordDTO;
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
    public withResolvedRecord(resolvedRecord: ResolvedRecordDTO): ListAlarmHandleHistoriesResponse {
        this['resolved_record'] = resolvedRecord;
        return this;
    }
    public set resolvedRecord(resolvedRecord: ResolvedRecordDTO  | undefined) {
        this['resolved_record'] = resolvedRecord;
    }
    public get resolvedRecord(): ResolvedRecordDTO | undefined {
        return this['resolved_record'];
    }
}