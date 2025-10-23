import { QueryTopSqlsResult } from './QueryTopSqlsResult';
import { TopSqlsLogicalReadResult } from './TopSqlsLogicalReadResult';
import { TopSqlsRowResult } from './TopSqlsRowResult';
import { TopSqlsTimeResult } from './TopSqlsTimeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopSqlsResponse extends SdkResponse {
    private 'total_count'?: number;
    public list?: Array<QueryTopSqlsResult>;
    private 'avg_cpu_time_top_values'?: Array<TopSqlsTimeResult>;
    private 'avg_duration_time_top_values'?: Array<TopSqlsTimeResult>;
    private 'avg_rows_top_values'?: Array<TopSqlsRowResult>;
    private 'avg_logical_top_values'?: Array<TopSqlsLogicalReadResult>;
    private 'total_cpu_time_top_values'?: Array<TopSqlsTimeResult>;
    private 'total_duration_time_top_values'?: Array<TopSqlsTimeResult>;
    private 'total_rows_top_values'?: Array<TopSqlsRowResult>;
    private 'total_logical_reads_top_values'?: Array<TopSqlsLogicalReadResult>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListTopSqlsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withList(list: Array<QueryTopSqlsResult>): ListTopSqlsResponse {
        this['list'] = list;
        return this;
    }
    public withAvgCpuTimeTopValues(avgCpuTimeTopValues: Array<TopSqlsTimeResult>): ListTopSqlsResponse {
        this['avg_cpu_time_top_values'] = avgCpuTimeTopValues;
        return this;
    }
    public set avgCpuTimeTopValues(avgCpuTimeTopValues: Array<TopSqlsTimeResult>  | undefined) {
        this['avg_cpu_time_top_values'] = avgCpuTimeTopValues;
    }
    public get avgCpuTimeTopValues(): Array<TopSqlsTimeResult> | undefined {
        return this['avg_cpu_time_top_values'];
    }
    public withAvgDurationTimeTopValues(avgDurationTimeTopValues: Array<TopSqlsTimeResult>): ListTopSqlsResponse {
        this['avg_duration_time_top_values'] = avgDurationTimeTopValues;
        return this;
    }
    public set avgDurationTimeTopValues(avgDurationTimeTopValues: Array<TopSqlsTimeResult>  | undefined) {
        this['avg_duration_time_top_values'] = avgDurationTimeTopValues;
    }
    public get avgDurationTimeTopValues(): Array<TopSqlsTimeResult> | undefined {
        return this['avg_duration_time_top_values'];
    }
    public withAvgRowsTopValues(avgRowsTopValues: Array<TopSqlsRowResult>): ListTopSqlsResponse {
        this['avg_rows_top_values'] = avgRowsTopValues;
        return this;
    }
    public set avgRowsTopValues(avgRowsTopValues: Array<TopSqlsRowResult>  | undefined) {
        this['avg_rows_top_values'] = avgRowsTopValues;
    }
    public get avgRowsTopValues(): Array<TopSqlsRowResult> | undefined {
        return this['avg_rows_top_values'];
    }
    public withAvgLogicalTopValues(avgLogicalTopValues: Array<TopSqlsLogicalReadResult>): ListTopSqlsResponse {
        this['avg_logical_top_values'] = avgLogicalTopValues;
        return this;
    }
    public set avgLogicalTopValues(avgLogicalTopValues: Array<TopSqlsLogicalReadResult>  | undefined) {
        this['avg_logical_top_values'] = avgLogicalTopValues;
    }
    public get avgLogicalTopValues(): Array<TopSqlsLogicalReadResult> | undefined {
        return this['avg_logical_top_values'];
    }
    public withTotalCpuTimeTopValues(totalCpuTimeTopValues: Array<TopSqlsTimeResult>): ListTopSqlsResponse {
        this['total_cpu_time_top_values'] = totalCpuTimeTopValues;
        return this;
    }
    public set totalCpuTimeTopValues(totalCpuTimeTopValues: Array<TopSqlsTimeResult>  | undefined) {
        this['total_cpu_time_top_values'] = totalCpuTimeTopValues;
    }
    public get totalCpuTimeTopValues(): Array<TopSqlsTimeResult> | undefined {
        return this['total_cpu_time_top_values'];
    }
    public withTotalDurationTimeTopValues(totalDurationTimeTopValues: Array<TopSqlsTimeResult>): ListTopSqlsResponse {
        this['total_duration_time_top_values'] = totalDurationTimeTopValues;
        return this;
    }
    public set totalDurationTimeTopValues(totalDurationTimeTopValues: Array<TopSqlsTimeResult>  | undefined) {
        this['total_duration_time_top_values'] = totalDurationTimeTopValues;
    }
    public get totalDurationTimeTopValues(): Array<TopSqlsTimeResult> | undefined {
        return this['total_duration_time_top_values'];
    }
    public withTotalRowsTopValues(totalRowsTopValues: Array<TopSqlsRowResult>): ListTopSqlsResponse {
        this['total_rows_top_values'] = totalRowsTopValues;
        return this;
    }
    public set totalRowsTopValues(totalRowsTopValues: Array<TopSqlsRowResult>  | undefined) {
        this['total_rows_top_values'] = totalRowsTopValues;
    }
    public get totalRowsTopValues(): Array<TopSqlsRowResult> | undefined {
        return this['total_rows_top_values'];
    }
    public withTotalLogicalReadsTopValues(totalLogicalReadsTopValues: Array<TopSqlsLogicalReadResult>): ListTopSqlsResponse {
        this['total_logical_reads_top_values'] = totalLogicalReadsTopValues;
        return this;
    }
    public set totalLogicalReadsTopValues(totalLogicalReadsTopValues: Array<TopSqlsLogicalReadResult>  | undefined) {
        this['total_logical_reads_top_values'] = totalLogicalReadsTopValues;
    }
    public get totalLogicalReadsTopValues(): Array<TopSqlsLogicalReadResult> | undefined {
        return this['total_logical_reads_top_values'];
    }
}