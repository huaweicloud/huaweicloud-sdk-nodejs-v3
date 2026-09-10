import { TaskDetailInfo } from './TaskDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRealTimeJobDetailsResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'job_id'?: string;
    public state?: ShowRealTimeJobDetailsResponseStateEnum | string;
    private 'migration_type'?: ShowRealTimeJobDetailsResponseMigrationTypeEnum | string;
    private 'startup_timestamp'?: string;
    private 'job_engine_version'?: string;
    private 'cluster_engine_version'?: string;
    private 'cluster_type'?: string;
    private 'tracking_url'?: string;
    private 'metric_info'?: string;
    private 'task_details'?: Array<TaskDetailInfo>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowRealTimeJobDetailsResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowRealTimeJobDetailsResponse {
        this['message'] = message;
        return this;
    }
    public withJobId(jobId: string): ShowRealTimeJobDetailsResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withState(state: ShowRealTimeJobDetailsResponseStateEnum | string): ShowRealTimeJobDetailsResponse {
        this['state'] = state;
        return this;
    }
    public withMigrationType(migrationType: ShowRealTimeJobDetailsResponseMigrationTypeEnum | string): ShowRealTimeJobDetailsResponse {
        this['migration_type'] = migrationType;
        return this;
    }
    public set migrationType(migrationType: ShowRealTimeJobDetailsResponseMigrationTypeEnum | string  | undefined) {
        this['migration_type'] = migrationType;
    }
    public get migrationType(): ShowRealTimeJobDetailsResponseMigrationTypeEnum | string | undefined {
        return this['migration_type'];
    }
    public withStartupTimestamp(startupTimestamp: string): ShowRealTimeJobDetailsResponse {
        this['startup_timestamp'] = startupTimestamp;
        return this;
    }
    public set startupTimestamp(startupTimestamp: string  | undefined) {
        this['startup_timestamp'] = startupTimestamp;
    }
    public get startupTimestamp(): string | undefined {
        return this['startup_timestamp'];
    }
    public withJobEngineVersion(jobEngineVersion: string): ShowRealTimeJobDetailsResponse {
        this['job_engine_version'] = jobEngineVersion;
        return this;
    }
    public set jobEngineVersion(jobEngineVersion: string  | undefined) {
        this['job_engine_version'] = jobEngineVersion;
    }
    public get jobEngineVersion(): string | undefined {
        return this['job_engine_version'];
    }
    public withClusterEngineVersion(clusterEngineVersion: string): ShowRealTimeJobDetailsResponse {
        this['cluster_engine_version'] = clusterEngineVersion;
        return this;
    }
    public set clusterEngineVersion(clusterEngineVersion: string  | undefined) {
        this['cluster_engine_version'] = clusterEngineVersion;
    }
    public get clusterEngineVersion(): string | undefined {
        return this['cluster_engine_version'];
    }
    public withClusterType(clusterType: string): ShowRealTimeJobDetailsResponse {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withTrackingUrl(trackingUrl: string): ShowRealTimeJobDetailsResponse {
        this['tracking_url'] = trackingUrl;
        return this;
    }
    public set trackingUrl(trackingUrl: string  | undefined) {
        this['tracking_url'] = trackingUrl;
    }
    public get trackingUrl(): string | undefined {
        return this['tracking_url'];
    }
    public withMetricInfo(metricInfo: string): ShowRealTimeJobDetailsResponse {
        this['metric_info'] = metricInfo;
        return this;
    }
    public set metricInfo(metricInfo: string  | undefined) {
        this['metric_info'] = metricInfo;
    }
    public get metricInfo(): string | undefined {
        return this['metric_info'];
    }
    public withTaskDetails(taskDetails: Array<TaskDetailInfo>): ShowRealTimeJobDetailsResponse {
        this['task_details'] = taskDetails;
        return this;
    }
    public set taskDetails(taskDetails: Array<TaskDetailInfo>  | undefined) {
        this['task_details'] = taskDetails;
    }
    public get taskDetails(): Array<TaskDetailInfo> | undefined {
        return this['task_details'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowRealTimeJobDetailsResponseStateEnum {
    EXCEPTION = 'EXCEPTION',
    STOPPING = 'STOPPING',
    SUBMITTING = 'SUBMITTING',
    RUNNING = 'RUNNING',
    STOPPED = 'STOPPED',
    SUCCESS = 'SUCCESS'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowRealTimeJobDetailsResponseMigrationTypeEnum {
    INCREMENTAL_DATA = 'INCREMENTAL_DATA',
    HISTORY_DATA = 'HISTORY_DATA'
}
