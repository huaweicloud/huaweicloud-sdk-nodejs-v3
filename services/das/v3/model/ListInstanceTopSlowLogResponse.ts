import { TopInstanceSlowLogRowsExaminedExceeding } from './TopInstanceSlowLogRowsExaminedExceeding';
import { TopInstanceSlowLogTopExecuteSlowLogs } from './TopInstanceSlowLogTopExecuteSlowLogs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceTopSlowLogResponse extends SdkResponse {
    private 'top_execute_slow_logs'?: Array<TopInstanceSlowLogTopExecuteSlowLogs>;
    private 'top_avg_query_time_slow_logs'?: Array<TopInstanceSlowLogTopExecuteSlowLogs>;
    private 'top_max_query_time_slow_logs'?: Array<TopInstanceSlowLogTopExecuteSlowLogs>;
    private 'rows_examined_exceeding'?: Array<TopInstanceSlowLogRowsExaminedExceeding>;
    public constructor() { 
        super();
    }
    public withTopExecuteSlowLogs(topExecuteSlowLogs: Array<TopInstanceSlowLogTopExecuteSlowLogs>): ListInstanceTopSlowLogResponse {
        this['top_execute_slow_logs'] = topExecuteSlowLogs;
        return this;
    }
    public set topExecuteSlowLogs(topExecuteSlowLogs: Array<TopInstanceSlowLogTopExecuteSlowLogs>  | undefined) {
        this['top_execute_slow_logs'] = topExecuteSlowLogs;
    }
    public get topExecuteSlowLogs(): Array<TopInstanceSlowLogTopExecuteSlowLogs> | undefined {
        return this['top_execute_slow_logs'];
    }
    public withTopAvgQueryTimeSlowLogs(topAvgQueryTimeSlowLogs: Array<TopInstanceSlowLogTopExecuteSlowLogs>): ListInstanceTopSlowLogResponse {
        this['top_avg_query_time_slow_logs'] = topAvgQueryTimeSlowLogs;
        return this;
    }
    public set topAvgQueryTimeSlowLogs(topAvgQueryTimeSlowLogs: Array<TopInstanceSlowLogTopExecuteSlowLogs>  | undefined) {
        this['top_avg_query_time_slow_logs'] = topAvgQueryTimeSlowLogs;
    }
    public get topAvgQueryTimeSlowLogs(): Array<TopInstanceSlowLogTopExecuteSlowLogs> | undefined {
        return this['top_avg_query_time_slow_logs'];
    }
    public withTopMaxQueryTimeSlowLogs(topMaxQueryTimeSlowLogs: Array<TopInstanceSlowLogTopExecuteSlowLogs>): ListInstanceTopSlowLogResponse {
        this['top_max_query_time_slow_logs'] = topMaxQueryTimeSlowLogs;
        return this;
    }
    public set topMaxQueryTimeSlowLogs(topMaxQueryTimeSlowLogs: Array<TopInstanceSlowLogTopExecuteSlowLogs>  | undefined) {
        this['top_max_query_time_slow_logs'] = topMaxQueryTimeSlowLogs;
    }
    public get topMaxQueryTimeSlowLogs(): Array<TopInstanceSlowLogTopExecuteSlowLogs> | undefined {
        return this['top_max_query_time_slow_logs'];
    }
    public withRowsExaminedExceeding(rowsExaminedExceeding: Array<TopInstanceSlowLogRowsExaminedExceeding>): ListInstanceTopSlowLogResponse {
        this['rows_examined_exceeding'] = rowsExaminedExceeding;
        return this;
    }
    public set rowsExaminedExceeding(rowsExaminedExceeding: Array<TopInstanceSlowLogRowsExaminedExceeding>  | undefined) {
        this['rows_examined_exceeding'] = rowsExaminedExceeding;
    }
    public get rowsExaminedExceeding(): Array<TopInstanceSlowLogRowsExaminedExceeding> | undefined {
        return this['rows_examined_exceeding'];
    }
}