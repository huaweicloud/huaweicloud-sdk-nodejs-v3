import { DiskStat } from './DiskStat';
import { FullSqlStat } from './FullSqlStat';
import { HealthReportInstanceInfo } from './HealthReportInstanceInfo';
import { InspectionStat } from './InspectionStat';
import { PerformanceStat } from './PerformanceStat';
import { SlowLogStat } from './SlowLogStat';
import { SummaryInfo } from './SummaryInfo';
import { TableSpaceStat } from './TableSpaceStat';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceHealthReport4ApiResponse extends SdkResponse {
    public success?: boolean;
    private 'start_at'?: number;
    private 'end_at'?: number;
    private 'task_id'?: string;
    private 'summary_info'?: SummaryInfo;
    private 'instance_info'?: HealthReportInstanceInfo;
    private 'performance_stat'?: PerformanceStat;
    private 'disk_stat'?: DiskStat;
    private 'table_space_stat'?: TableSpaceStat;
    private 'slow_log_stat'?: SlowLogStat;
    private 'full_sql_stat'?: FullSqlStat;
    private 'inspection_stat'?: InspectionStat;
    private 'error_message'?: string;
    private 'suffix_uri'?: string;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): ShowInstanceHealthReport4ApiResponse {
        this['success'] = success;
        return this;
    }
    public withStartAt(startAt: number): ShowInstanceHealthReport4ApiResponse {
        this['start_at'] = startAt;
        return this;
    }
    public set startAt(startAt: number  | undefined) {
        this['start_at'] = startAt;
    }
    public get startAt(): number | undefined {
        return this['start_at'];
    }
    public withEndAt(endAt: number): ShowInstanceHealthReport4ApiResponse {
        this['end_at'] = endAt;
        return this;
    }
    public set endAt(endAt: number  | undefined) {
        this['end_at'] = endAt;
    }
    public get endAt(): number | undefined {
        return this['end_at'];
    }
    public withTaskId(taskId: string): ShowInstanceHealthReport4ApiResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withSummaryInfo(summaryInfo: SummaryInfo): ShowInstanceHealthReport4ApiResponse {
        this['summary_info'] = summaryInfo;
        return this;
    }
    public set summaryInfo(summaryInfo: SummaryInfo  | undefined) {
        this['summary_info'] = summaryInfo;
    }
    public get summaryInfo(): SummaryInfo | undefined {
        return this['summary_info'];
    }
    public withInstanceInfo(instanceInfo: HealthReportInstanceInfo): ShowInstanceHealthReport4ApiResponse {
        this['instance_info'] = instanceInfo;
        return this;
    }
    public set instanceInfo(instanceInfo: HealthReportInstanceInfo  | undefined) {
        this['instance_info'] = instanceInfo;
    }
    public get instanceInfo(): HealthReportInstanceInfo | undefined {
        return this['instance_info'];
    }
    public withPerformanceStat(performanceStat: PerformanceStat): ShowInstanceHealthReport4ApiResponse {
        this['performance_stat'] = performanceStat;
        return this;
    }
    public set performanceStat(performanceStat: PerformanceStat  | undefined) {
        this['performance_stat'] = performanceStat;
    }
    public get performanceStat(): PerformanceStat | undefined {
        return this['performance_stat'];
    }
    public withDiskStat(diskStat: DiskStat): ShowInstanceHealthReport4ApiResponse {
        this['disk_stat'] = diskStat;
        return this;
    }
    public set diskStat(diskStat: DiskStat  | undefined) {
        this['disk_stat'] = diskStat;
    }
    public get diskStat(): DiskStat | undefined {
        return this['disk_stat'];
    }
    public withTableSpaceStat(tableSpaceStat: TableSpaceStat): ShowInstanceHealthReport4ApiResponse {
        this['table_space_stat'] = tableSpaceStat;
        return this;
    }
    public set tableSpaceStat(tableSpaceStat: TableSpaceStat  | undefined) {
        this['table_space_stat'] = tableSpaceStat;
    }
    public get tableSpaceStat(): TableSpaceStat | undefined {
        return this['table_space_stat'];
    }
    public withSlowLogStat(slowLogStat: SlowLogStat): ShowInstanceHealthReport4ApiResponse {
        this['slow_log_stat'] = slowLogStat;
        return this;
    }
    public set slowLogStat(slowLogStat: SlowLogStat  | undefined) {
        this['slow_log_stat'] = slowLogStat;
    }
    public get slowLogStat(): SlowLogStat | undefined {
        return this['slow_log_stat'];
    }
    public withFullSqlStat(fullSqlStat: FullSqlStat): ShowInstanceHealthReport4ApiResponse {
        this['full_sql_stat'] = fullSqlStat;
        return this;
    }
    public set fullSqlStat(fullSqlStat: FullSqlStat  | undefined) {
        this['full_sql_stat'] = fullSqlStat;
    }
    public get fullSqlStat(): FullSqlStat | undefined {
        return this['full_sql_stat'];
    }
    public withInspectionStat(inspectionStat: InspectionStat): ShowInstanceHealthReport4ApiResponse {
        this['inspection_stat'] = inspectionStat;
        return this;
    }
    public set inspectionStat(inspectionStat: InspectionStat  | undefined) {
        this['inspection_stat'] = inspectionStat;
    }
    public get inspectionStat(): InspectionStat | undefined {
        return this['inspection_stat'];
    }
    public withErrorMessage(errorMessage: string): ShowInstanceHealthReport4ApiResponse {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withSuffixUri(suffixUri: string): ShowInstanceHealthReport4ApiResponse {
        this['suffix_uri'] = suffixUri;
        return this;
    }
    public set suffixUri(suffixUri: string  | undefined) {
        this['suffix_uri'] = suffixUri;
    }
    public get suffixUri(): string | undefined {
        return this['suffix_uri'];
    }
}