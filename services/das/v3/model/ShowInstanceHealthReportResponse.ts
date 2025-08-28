import { HealthReportDiskStat } from './HealthReportDiskStat';
import { HealthReportFullSqlStat } from './HealthReportFullSqlStat';
import { HealthReportInspectionStat } from './HealthReportInspectionStat';
import { HealthReportInstanceInfo } from './HealthReportInstanceInfo';
import { HealthReportPerformanceStat } from './HealthReportPerformanceStat';
import { HealthReportSlowLogStat } from './HealthReportSlowLogStat';
import { HealthReportSummaryInfo } from './HealthReportSummaryInfo';
import { HealthReportTableSpaceStat } from './HealthReportTableSpaceStat';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceHealthReportResponse extends SdkResponse {
    public success?: boolean;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'task_id'?: string;
    private 'summary_info'?: HealthReportSummaryInfo;
    private 'instance_info'?: HealthReportInstanceInfo;
    private 'performance_stat'?: HealthReportPerformanceStat;
    private 'disk_stat'?: HealthReportDiskStat;
    private 'table_space_stat'?: HealthReportTableSpaceStat;
    private 'slow_log_stat'?: HealthReportSlowLogStat;
    private 'full_sql_stat'?: HealthReportFullSqlStat;
    private 'inspection_stat'?: HealthReportInspectionStat;
    private 'error_message'?: string;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): ShowInstanceHealthReportResponse {
        this['success'] = success;
        return this;
    }
    public withStartAt(startAt: number): ShowInstanceHealthReportResponse {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ShowInstanceHealthReportResponse {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withTaskId(taskId: string): ShowInstanceHealthReportResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withSummaryInfo(summaryInfo: HealthReportSummaryInfo): ShowInstanceHealthReportResponse {
        this['summary_info'] = summaryInfo;
        return this;
    }
    public set summaryInfo(summaryInfo: HealthReportSummaryInfo  | undefined) {
        this['summary_info'] = summaryInfo;
    }
    public get summaryInfo(): HealthReportSummaryInfo | undefined {
        return this['summary_info'];
    }
    public withInstanceInfo(instanceInfo: HealthReportInstanceInfo): ShowInstanceHealthReportResponse {
        this['instance_info'] = instanceInfo;
        return this;
    }
    public set instanceInfo(instanceInfo: HealthReportInstanceInfo  | undefined) {
        this['instance_info'] = instanceInfo;
    }
    public get instanceInfo(): HealthReportInstanceInfo | undefined {
        return this['instance_info'];
    }
    public withPerformanceStat(performanceStat: HealthReportPerformanceStat): ShowInstanceHealthReportResponse {
        this['performance_stat'] = performanceStat;
        return this;
    }
    public set performanceStat(performanceStat: HealthReportPerformanceStat  | undefined) {
        this['performance_stat'] = performanceStat;
    }
    public get performanceStat(): HealthReportPerformanceStat | undefined {
        return this['performance_stat'];
    }
    public withDiskStat(diskStat: HealthReportDiskStat): ShowInstanceHealthReportResponse {
        this['disk_stat'] = diskStat;
        return this;
    }
    public set diskStat(diskStat: HealthReportDiskStat  | undefined) {
        this['disk_stat'] = diskStat;
    }
    public get diskStat(): HealthReportDiskStat | undefined {
        return this['disk_stat'];
    }
    public withTableSpaceStat(tableSpaceStat: HealthReportTableSpaceStat): ShowInstanceHealthReportResponse {
        this['table_space_stat'] = tableSpaceStat;
        return this;
    }
    public set tableSpaceStat(tableSpaceStat: HealthReportTableSpaceStat  | undefined) {
        this['table_space_stat'] = tableSpaceStat;
    }
    public get tableSpaceStat(): HealthReportTableSpaceStat | undefined {
        return this['table_space_stat'];
    }
    public withSlowLogStat(slowLogStat: HealthReportSlowLogStat): ShowInstanceHealthReportResponse {
        this['slow_log_stat'] = slowLogStat;
        return this;
    }
    public set slowLogStat(slowLogStat: HealthReportSlowLogStat  | undefined) {
        this['slow_log_stat'] = slowLogStat;
    }
    public get slowLogStat(): HealthReportSlowLogStat | undefined {
        return this['slow_log_stat'];
    }
    public withFullSqlStat(fullSqlStat: HealthReportFullSqlStat): ShowInstanceHealthReportResponse {
        this['full_sql_stat'] = fullSqlStat;
        return this;
    }
    public set fullSqlStat(fullSqlStat: HealthReportFullSqlStat  | undefined) {
        this['full_sql_stat'] = fullSqlStat;
    }
    public get fullSqlStat(): HealthReportFullSqlStat | undefined {
        return this['full_sql_stat'];
    }
    public withInspectionStat(inspectionStat: HealthReportInspectionStat): ShowInstanceHealthReportResponse {
        this['inspection_stat'] = inspectionStat;
        return this;
    }
    public set inspectionStat(inspectionStat: HealthReportInspectionStat  | undefined) {
        this['inspection_stat'] = inspectionStat;
    }
    public get inspectionStat(): HealthReportInspectionStat | undefined {
        return this['inspection_stat'];
    }
    public withErrorMessage(errorMessage: string): ShowInstanceHealthReportResponse {
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