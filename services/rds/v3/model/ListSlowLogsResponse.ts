import { SlowLog } from './SlowLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSlowLogsResponse extends SdkResponse {
    private 'slow_log_list'?: Array<SlowLog>;
    private 'total_record'?: number;
    public constructor() { 
        super();
    }
    public withSlowLogList(slowLogList: Array<SlowLog>): ListSlowLogsResponse {
        this['slow_log_list'] = slowLogList;
        return this;
    }
    public set slowLogList(slowLogList: Array<SlowLog>  | undefined) {
        this['slow_log_list'] = slowLogList;
    }
    public get slowLogList(): Array<SlowLog> | undefined {
        return this['slow_log_list'];
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
}