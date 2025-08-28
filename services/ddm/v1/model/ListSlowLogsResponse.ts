import { SlowLogs } from './SlowLogs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSlowLogsResponse extends SdkResponse {
    private 'total_record'?: number;
    private 'slow_log_list'?: Array<SlowLogs>;
    public constructor() { 
        super();
    }
    public withTotalRecord(totalRecord: number): ListSlowLogsResponse {
        this['total_record'] = totalRecord;
        return this;
    }
    public set totalRecord(totalRecord: number  | undefined) {
        this['total_record'] = totalRecord;
    }
    public get totalRecord(): number | undefined {
        return this['total_record'];
    }
    public withSlowLogList(slowLogList: Array<SlowLogs>): ListSlowLogsResponse {
        this['slow_log_list'] = slowLogList;
        return this;
    }
    public set slowLogList(slowLogList: Array<SlowLogs>  | undefined) {
        this['slow_log_list'] = slowLogList;
    }
    public get slowLogList(): Array<SlowLogs> | undefined {
        return this['slow_log_list'];
    }
}