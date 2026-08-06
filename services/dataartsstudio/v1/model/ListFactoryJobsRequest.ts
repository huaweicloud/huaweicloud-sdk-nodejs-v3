

export class ListFactoryJobsRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    private 'job_type'?: ListFactoryJobsRequestJobTypeEnum | string;
    private 'job_name'?: string;
    private 'job_id'?: string;
    public status?: string;
    private 'need_alarms'?: boolean;
    public tags?: string;
    private 'match_all_tags'?: boolean;
    private 'connection_name'?: string;
    private 'source_type'?: string;
    private 'source_name'?: string;
    private 'sink_type'?: string;
    private 'sink_name'?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListFactoryJobsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListFactoryJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListFactoryJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withJobType(jobType: ListFactoryJobsRequestJobTypeEnum | string): ListFactoryJobsRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ListFactoryJobsRequestJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): ListFactoryJobsRequestJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withJobName(jobName: string): ListFactoryJobsRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobId(jobId: string): ListFactoryJobsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: string): ListFactoryJobsRequest {
        this['status'] = status;
        return this;
    }
    public withNeedAlarms(needAlarms: boolean): ListFactoryJobsRequest {
        this['need_alarms'] = needAlarms;
        return this;
    }
    public set needAlarms(needAlarms: boolean  | undefined) {
        this['need_alarms'] = needAlarms;
    }
    public get needAlarms(): boolean | undefined {
        return this['need_alarms'];
    }
    public withTags(tags: string): ListFactoryJobsRequest {
        this['tags'] = tags;
        return this;
    }
    public withMatchAllTags(matchAllTags: boolean): ListFactoryJobsRequest {
        this['match_all_tags'] = matchAllTags;
        return this;
    }
    public set matchAllTags(matchAllTags: boolean  | undefined) {
        this['match_all_tags'] = matchAllTags;
    }
    public get matchAllTags(): boolean | undefined {
        return this['match_all_tags'];
    }
    public withConnectionName(connectionName: string): ListFactoryJobsRequest {
        this['connection_name'] = connectionName;
        return this;
    }
    public set connectionName(connectionName: string  | undefined) {
        this['connection_name'] = connectionName;
    }
    public get connectionName(): string | undefined {
        return this['connection_name'];
    }
    public withSourceType(sourceType: string): ListFactoryJobsRequest {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withSourceName(sourceName: string): ListFactoryJobsRequest {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
    public withSinkType(sinkType: string): ListFactoryJobsRequest {
        this['sink_type'] = sinkType;
        return this;
    }
    public set sinkType(sinkType: string  | undefined) {
        this['sink_type'] = sinkType;
    }
    public get sinkType(): string | undefined {
        return this['sink_type'];
    }
    public withSinkName(sinkName: string): ListFactoryJobsRequest {
        this['sink_name'] = sinkName;
        return this;
    }
    public set sinkName(sinkName: string  | undefined) {
        this['sink_name'] = sinkName;
    }
    public get sinkName(): string | undefined {
        return this['sink_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFactoryJobsRequestJobTypeEnum {
    REAL_TIME = 'REAL_TIME',
    BATCH = 'BATCH'
}
