import { InsTopSlowLogInfo } from './InsTopSlowLogInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceTopSlowLogResponse extends SdkResponse {
    private 'collect_slow_log'?: boolean;
    private 'top_execute_slow_logs'?: Array<InsTopSlowLogInfo>;
    private 'top_avg_query_time_slow_logs'?: Array<InsTopSlowLogInfo>;
    private 'top_max_query_time_slow_logs'?: Array<InsTopSlowLogInfo>;
    private 'rows_examined_exceeding'?: Array<InsTopSlowLogInfo>;
    public constructor() { 
        super();
    }
    public withCollectSlowLog(collectSlowLog: boolean): ShowInstanceTopSlowLogResponse {
        this['collect_slow_log'] = collectSlowLog;
        return this;
    }
    public set collectSlowLog(collectSlowLog: boolean  | undefined) {
        this['collect_slow_log'] = collectSlowLog;
    }
    public get collectSlowLog(): boolean | undefined {
        return this['collect_slow_log'];
    }
    public withTopExecuteSlowLogs(topExecuteSlowLogs: Array<InsTopSlowLogInfo>): ShowInstanceTopSlowLogResponse {
        this['top_execute_slow_logs'] = topExecuteSlowLogs;
        return this;
    }
    public set topExecuteSlowLogs(topExecuteSlowLogs: Array<InsTopSlowLogInfo>  | undefined) {
        this['top_execute_slow_logs'] = topExecuteSlowLogs;
    }
    public get topExecuteSlowLogs(): Array<InsTopSlowLogInfo> | undefined {
        return this['top_execute_slow_logs'];
    }
    public withTopAvgQueryTimeSlowLogs(topAvgQueryTimeSlowLogs: Array<InsTopSlowLogInfo>): ShowInstanceTopSlowLogResponse {
        this['top_avg_query_time_slow_logs'] = topAvgQueryTimeSlowLogs;
        return this;
    }
    public set topAvgQueryTimeSlowLogs(topAvgQueryTimeSlowLogs: Array<InsTopSlowLogInfo>  | undefined) {
        this['top_avg_query_time_slow_logs'] = topAvgQueryTimeSlowLogs;
    }
    public get topAvgQueryTimeSlowLogs(): Array<InsTopSlowLogInfo> | undefined {
        return this['top_avg_query_time_slow_logs'];
    }
    public withTopMaxQueryTimeSlowLogs(topMaxQueryTimeSlowLogs: Array<InsTopSlowLogInfo>): ShowInstanceTopSlowLogResponse {
        this['top_max_query_time_slow_logs'] = topMaxQueryTimeSlowLogs;
        return this;
    }
    public set topMaxQueryTimeSlowLogs(topMaxQueryTimeSlowLogs: Array<InsTopSlowLogInfo>  | undefined) {
        this['top_max_query_time_slow_logs'] = topMaxQueryTimeSlowLogs;
    }
    public get topMaxQueryTimeSlowLogs(): Array<InsTopSlowLogInfo> | undefined {
        return this['top_max_query_time_slow_logs'];
    }
    public withRowsExaminedExceeding(rowsExaminedExceeding: Array<InsTopSlowLogInfo>): ShowInstanceTopSlowLogResponse {
        this['rows_examined_exceeding'] = rowsExaminedExceeding;
        return this;
    }
    public set rowsExaminedExceeding(rowsExaminedExceeding: Array<InsTopSlowLogInfo>  | undefined) {
        this['rows_examined_exceeding'] = rowsExaminedExceeding;
    }
    public get rowsExaminedExceeding(): Array<InsTopSlowLogInfo> | undefined {
        return this['rows_examined_exceeding'];
    }
}