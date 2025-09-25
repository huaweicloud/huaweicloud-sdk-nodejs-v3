import { AlarmHistoryRecordResult } from './AlarmHistoryRecordResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAlarmHistoryRecordResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'history_records'?: Array<AlarmHistoryRecordResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowAlarmHistoryRecordResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withHistoryRecords(historyRecords: Array<AlarmHistoryRecordResult>): ShowAlarmHistoryRecordResponse {
        this['history_records'] = historyRecords;
        return this;
    }
    public set historyRecords(historyRecords: Array<AlarmHistoryRecordResult>  | undefined) {
        this['history_records'] = historyRecords;
    }
    public get historyRecords(): Array<AlarmHistoryRecordResult> | undefined {
        return this['history_records'];
    }
}