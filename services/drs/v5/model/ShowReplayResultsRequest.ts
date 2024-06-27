

export class ShowReplayResultsRequest {
    private 'job_id'?: string;
    private 'X-Language'?: ShowReplayResultsRequestXLanguageEnum | string;
    public type?: ShowReplayResultsRequestTypeEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: ShowReplayResultsRequestSortDirEnum | string;
    private 'target_name'?: ShowReplayResultsRequestTargetNameEnum | string;
    private 'is_sample'?: boolean;
    private 'error_type'?: string;
    private 'sql_template_md5'?: string;
    public constructor(jobId?: string, type?: string) { 
        this['job_id'] = jobId;
        this['type'] = type;
    }
    public withJobId(jobId: string): ShowReplayResultsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ShowReplayResultsRequestXLanguageEnum | string): ShowReplayResultsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowReplayResultsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowReplayResultsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withType(type: ShowReplayResultsRequestTypeEnum | string): ShowReplayResultsRequest {
        this['type'] = type;
        return this;
    }
    public withStartTime(startTime: string): ShowReplayResultsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowReplayResultsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ShowReplayResultsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowReplayResultsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ShowReplayResultsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ShowReplayResultsRequestSortDirEnum | string): ShowReplayResultsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ShowReplayResultsRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ShowReplayResultsRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withTargetName(targetName: ShowReplayResultsRequestTargetNameEnum | string): ShowReplayResultsRequest {
        this['target_name'] = targetName;
        return this;
    }
    public set targetName(targetName: ShowReplayResultsRequestTargetNameEnum | string  | undefined) {
        this['target_name'] = targetName;
    }
    public get targetName(): ShowReplayResultsRequestTargetNameEnum | string | undefined {
        return this['target_name'];
    }
    public withIsSample(isSample: boolean): ShowReplayResultsRequest {
        this['is_sample'] = isSample;
        return this;
    }
    public set isSample(isSample: boolean  | undefined) {
        this['is_sample'] = isSample;
    }
    public get isSample(): boolean | undefined {
        return this['is_sample'];
    }
    public withErrorType(errorType: string): ShowReplayResultsRequest {
        this['error_type'] = errorType;
        return this;
    }
    public set errorType(errorType: string  | undefined) {
        this['error_type'] = errorType;
    }
    public get errorType(): string | undefined {
        return this['error_type'];
    }
    public withSqlTemplateMd5(sqlTemplateMd5: string): ShowReplayResultsRequest {
        this['sql_template_md5'] = sqlTemplateMd5;
        return this;
    }
    public set sqlTemplateMd5(sqlTemplateMd5: string  | undefined) {
        this['sql_template_md5'] = sqlTemplateMd5;
    }
    public get sqlTemplateMd5(): string | undefined {
        return this['sql_template_md5'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowReplayResultsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowReplayResultsRequestTypeEnum {
    SHARD_STATISTICS = 'shard_statistics',
    SLOW_SQL = 'slow_sql',
    ERROR_SQL = 'error_sql',
    SLOW_SQL_TEMPLATE = 'slow_sql_template',
    ERROR_SQL_TEMPLATE = 'error_sql_template',
    REPLAYING_SQL = 'replaying_sql',
    ERROR_CLASSIFICATION = 'error_classification'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowReplayResultsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowReplayResultsRequestTargetNameEnum {
    TARGET = 'target',
    TARGET_MIRROR = 'target_mirror'
}
