import { TmsTagEntity } from './TmsTagEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlJobStatusResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'job_type'?: string;
    private 'queue_name'?: string;
    public owner?: string;
    private 'start_time'?: number;
    public duration?: number;
    public status?: ShowSqlJobStatusResponseStatusEnum | string;
    private 'input_row_count'?: number;
    private 'bad_row_count'?: number;
    private 'input_size'?: number;
    private 'result_count'?: number;
    private 'database_name'?: string;
    private 'table_name'?: string;
    public detail?: string;
    private 'user_conf'?: string;
    private 'result_path'?: string;
    private 'result_format'?: string;
    public statement?: string;
    private 'is_success'?: boolean;
    public message?: string;
    private 'job_mode'?: string;
    public tags?: Array<TmsTagEntity>;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ShowSqlJobStatusResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobType(jobType: string): ShowSqlJobStatusResponse {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withQueueName(queueName: string): ShowSqlJobStatusResponse {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withOwner(owner: string): ShowSqlJobStatusResponse {
        this['owner'] = owner;
        return this;
    }
    public withStartTime(startTime: number): ShowSqlJobStatusResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withDuration(duration: number): ShowSqlJobStatusResponse {
        this['duration'] = duration;
        return this;
    }
    public withStatus(status: ShowSqlJobStatusResponseStatusEnum | string): ShowSqlJobStatusResponse {
        this['status'] = status;
        return this;
    }
    public withInputRowCount(inputRowCount: number): ShowSqlJobStatusResponse {
        this['input_row_count'] = inputRowCount;
        return this;
    }
    public set inputRowCount(inputRowCount: number  | undefined) {
        this['input_row_count'] = inputRowCount;
    }
    public get inputRowCount(): number | undefined {
        return this['input_row_count'];
    }
    public withBadRowCount(badRowCount: number): ShowSqlJobStatusResponse {
        this['bad_row_count'] = badRowCount;
        return this;
    }
    public set badRowCount(badRowCount: number  | undefined) {
        this['bad_row_count'] = badRowCount;
    }
    public get badRowCount(): number | undefined {
        return this['bad_row_count'];
    }
    public withInputSize(inputSize: number): ShowSqlJobStatusResponse {
        this['input_size'] = inputSize;
        return this;
    }
    public set inputSize(inputSize: number  | undefined) {
        this['input_size'] = inputSize;
    }
    public get inputSize(): number | undefined {
        return this['input_size'];
    }
    public withResultCount(resultCount: number): ShowSqlJobStatusResponse {
        this['result_count'] = resultCount;
        return this;
    }
    public set resultCount(resultCount: number  | undefined) {
        this['result_count'] = resultCount;
    }
    public get resultCount(): number | undefined {
        return this['result_count'];
    }
    public withDatabaseName(databaseName: string): ShowSqlJobStatusResponse {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withTableName(tableName: string): ShowSqlJobStatusResponse {
        this['table_name'] = tableName;
        return this;
    }
    public set tableName(tableName: string  | undefined) {
        this['table_name'] = tableName;
    }
    public get tableName(): string | undefined {
        return this['table_name'];
    }
    public withDetail(detail: string): ShowSqlJobStatusResponse {
        this['detail'] = detail;
        return this;
    }
    public withUserConf(userConf: string): ShowSqlJobStatusResponse {
        this['user_conf'] = userConf;
        return this;
    }
    public set userConf(userConf: string  | undefined) {
        this['user_conf'] = userConf;
    }
    public get userConf(): string | undefined {
        return this['user_conf'];
    }
    public withResultPath(resultPath: string): ShowSqlJobStatusResponse {
        this['result_path'] = resultPath;
        return this;
    }
    public set resultPath(resultPath: string  | undefined) {
        this['result_path'] = resultPath;
    }
    public get resultPath(): string | undefined {
        return this['result_path'];
    }
    public withResultFormat(resultFormat: string): ShowSqlJobStatusResponse {
        this['result_format'] = resultFormat;
        return this;
    }
    public set resultFormat(resultFormat: string  | undefined) {
        this['result_format'] = resultFormat;
    }
    public get resultFormat(): string | undefined {
        return this['result_format'];
    }
    public withStatement(statement: string): ShowSqlJobStatusResponse {
        this['statement'] = statement;
        return this;
    }
    public withIsSuccess(isSuccess: boolean): ShowSqlJobStatusResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowSqlJobStatusResponse {
        this['message'] = message;
        return this;
    }
    public withJobMode(jobMode: string): ShowSqlJobStatusResponse {
        this['job_mode'] = jobMode;
        return this;
    }
    public set jobMode(jobMode: string  | undefined) {
        this['job_mode'] = jobMode;
    }
    public get jobMode(): string | undefined {
        return this['job_mode'];
    }
    public withTags(tags: Array<TmsTagEntity>): ShowSqlJobStatusResponse {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSqlJobStatusResponseStatusEnum {
    LAUNCHING = 'LAUNCHING',
    RUNNING = 'RUNNING',
    FINISHED = 'FINISHED',
    FAILED = 'FAILED',
    CANCELLED = 'CANCELLED'
}
