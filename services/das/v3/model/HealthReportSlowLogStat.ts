import { HealthReportSqlTemplate } from './HealthReportSqlTemplate';


export class HealthReportSlowLogStat {
    private 'collect_slow_log'?: boolean;
    private 'top_execute_slow_logs'?: Array<HealthReportSqlTemplate>;
    private 'top_avg_query_time_slow_logs'?: Array<HealthReportSqlTemplate>;
    private 'top_max_query_time_slow_logs'?: Array<HealthReportSqlTemplate>;
    private 'rows_examined_exceeding'?: Array<HealthReportSqlTemplate>;
    private 'analyze_success'?: boolean;
    private 'error_message'?: string;
    public constructor(collectSlowLog?: boolean, topExecuteSlowLogs?: Array<HealthReportSqlTemplate>, topAvgQueryTimeSlowLogs?: Array<HealthReportSqlTemplate>, topMaxQueryTimeSlowLogs?: Array<HealthReportSqlTemplate>, rowsExaminedExceeding?: Array<HealthReportSqlTemplate>, analyzeSuccess?: boolean, errorMessage?: string) { 
        this['collect_slow_log'] = collectSlowLog;
        this['top_execute_slow_logs'] = topExecuteSlowLogs;
        this['top_avg_query_time_slow_logs'] = topAvgQueryTimeSlowLogs;
        this['top_max_query_time_slow_logs'] = topMaxQueryTimeSlowLogs;
        this['rows_examined_exceeding'] = rowsExaminedExceeding;
        this['analyze_success'] = analyzeSuccess;
        this['error_message'] = errorMessage;
    }
    public withCollectSlowLog(collectSlowLog: boolean): HealthReportSlowLogStat {
        this['collect_slow_log'] = collectSlowLog;
        return this;
    }
    public set collectSlowLog(collectSlowLog: boolean  | undefined) {
        this['collect_slow_log'] = collectSlowLog;
    }
    public get collectSlowLog(): boolean | undefined {
        return this['collect_slow_log'];
    }
    public withTopExecuteSlowLogs(topExecuteSlowLogs: Array<HealthReportSqlTemplate>): HealthReportSlowLogStat {
        this['top_execute_slow_logs'] = topExecuteSlowLogs;
        return this;
    }
    public set topExecuteSlowLogs(topExecuteSlowLogs: Array<HealthReportSqlTemplate>  | undefined) {
        this['top_execute_slow_logs'] = topExecuteSlowLogs;
    }
    public get topExecuteSlowLogs(): Array<HealthReportSqlTemplate> | undefined {
        return this['top_execute_slow_logs'];
    }
    public withTopAvgQueryTimeSlowLogs(topAvgQueryTimeSlowLogs: Array<HealthReportSqlTemplate>): HealthReportSlowLogStat {
        this['top_avg_query_time_slow_logs'] = topAvgQueryTimeSlowLogs;
        return this;
    }
    public set topAvgQueryTimeSlowLogs(topAvgQueryTimeSlowLogs: Array<HealthReportSqlTemplate>  | undefined) {
        this['top_avg_query_time_slow_logs'] = topAvgQueryTimeSlowLogs;
    }
    public get topAvgQueryTimeSlowLogs(): Array<HealthReportSqlTemplate> | undefined {
        return this['top_avg_query_time_slow_logs'];
    }
    public withTopMaxQueryTimeSlowLogs(topMaxQueryTimeSlowLogs: Array<HealthReportSqlTemplate>): HealthReportSlowLogStat {
        this['top_max_query_time_slow_logs'] = topMaxQueryTimeSlowLogs;
        return this;
    }
    public set topMaxQueryTimeSlowLogs(topMaxQueryTimeSlowLogs: Array<HealthReportSqlTemplate>  | undefined) {
        this['top_max_query_time_slow_logs'] = topMaxQueryTimeSlowLogs;
    }
    public get topMaxQueryTimeSlowLogs(): Array<HealthReportSqlTemplate> | undefined {
        return this['top_max_query_time_slow_logs'];
    }
    public withRowsExaminedExceeding(rowsExaminedExceeding: Array<HealthReportSqlTemplate>): HealthReportSlowLogStat {
        this['rows_examined_exceeding'] = rowsExaminedExceeding;
        return this;
    }
    public set rowsExaminedExceeding(rowsExaminedExceeding: Array<HealthReportSqlTemplate>  | undefined) {
        this['rows_examined_exceeding'] = rowsExaminedExceeding;
    }
    public get rowsExaminedExceeding(): Array<HealthReportSqlTemplate> | undefined {
        return this['rows_examined_exceeding'];
    }
    public withAnalyzeSuccess(analyzeSuccess: boolean): HealthReportSlowLogStat {
        this['analyze_success'] = analyzeSuccess;
        return this;
    }
    public set analyzeSuccess(analyzeSuccess: boolean  | undefined) {
        this['analyze_success'] = analyzeSuccess;
    }
    public get analyzeSuccess(): boolean | undefined {
        return this['analyze_success'];
    }
    public withErrorMessage(errorMessage: string): HealthReportSlowLogStat {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}