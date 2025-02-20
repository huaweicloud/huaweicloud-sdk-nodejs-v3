

export class ShowJobDetailRequest {
    private 'job_id'?: string;
    private 'X-Language'?: ShowJobDetailRequestXLanguageEnum | string;
    public type?: ShowJobDetailRequestTypeEnum | string;
    private 'query_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'compare_type'?: ShowJobDetailRequestCompareTypeEnum | string;
    private 'query_type'?: ShowJobDetailRequestQueryTypeEnum | string;
    private 'object_type'?: ShowJobDetailRequestObjectTypeEnum | string;
    private 'compare_task_id'?: string;
    private 'source_db_name'?: string;
    private 'target_db_name'?: string;
    private 'compare_detail_type'?: ShowJobDetailRequestCompareDetailTypeEnum | string;
    public constructor(jobId?: string, type?: string) { 
        this['job_id'] = jobId;
        this['type'] = type;
    }
    public withJobId(jobId: string): ShowJobDetailRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ShowJobDetailRequestXLanguageEnum | string): ShowJobDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowJobDetailRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowJobDetailRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withType(type: ShowJobDetailRequestTypeEnum | string): ShowJobDetailRequest {
        this['type'] = type;
        return this;
    }
    public withQueryId(queryId: string): ShowJobDetailRequest {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
    public withOffset(offset: number): ShowJobDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowJobDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withCompareType(compareType: ShowJobDetailRequestCompareTypeEnum | string): ShowJobDetailRequest {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: ShowJobDetailRequestCompareTypeEnum | string  | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType(): ShowJobDetailRequestCompareTypeEnum | string | undefined {
        return this['compare_type'];
    }
    public withQueryType(queryType: ShowJobDetailRequestQueryTypeEnum | string): ShowJobDetailRequest {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: ShowJobDetailRequestQueryTypeEnum | string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): ShowJobDetailRequestQueryTypeEnum | string | undefined {
        return this['query_type'];
    }
    public withObjectType(objectType: ShowJobDetailRequestObjectTypeEnum | string): ShowJobDetailRequest {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: ShowJobDetailRequestObjectTypeEnum | string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): ShowJobDetailRequestObjectTypeEnum | string | undefined {
        return this['object_type'];
    }
    public withCompareTaskId(compareTaskId: string): ShowJobDetailRequest {
        this['compare_task_id'] = compareTaskId;
        return this;
    }
    public set compareTaskId(compareTaskId: string  | undefined) {
        this['compare_task_id'] = compareTaskId;
    }
    public get compareTaskId(): string | undefined {
        return this['compare_task_id'];
    }
    public withSourceDbName(sourceDbName: string): ShowJobDetailRequest {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string  | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName(): string | undefined {
        return this['source_db_name'];
    }
    public withTargetDbName(targetDbName: string): ShowJobDetailRequest {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string  | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName(): string | undefined {
        return this['target_db_name'];
    }
    public withCompareDetailType(compareDetailType: ShowJobDetailRequestCompareDetailTypeEnum | string): ShowJobDetailRequest {
        this['compare_detail_type'] = compareDetailType;
        return this;
    }
    public set compareDetailType(compareDetailType: ShowJobDetailRequestCompareDetailTypeEnum | string  | undefined) {
        this['compare_detail_type'] = compareDetailType;
    }
    public get compareDetailType(): ShowJobDetailRequestCompareDetailTypeEnum | string | undefined {
        return this['compare_detail_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowJobDetailRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowJobDetailRequestTypeEnum {
    OVERVIEW = 'overview',
    DETAIL = 'detail',
    NETWORK = 'network',
    PRECHECK = 'precheck',
    PROGRESS = 'progress',
    LOG = 'log',
    COMPARE = 'compare',
    FILE = 'file',
    IS_WRITABLE = 'is_writable',
    CLOUD_CONNECTION = 'cloud_connection',
    DIAGNOSIS = 'diagnosis',
    DIAGNOSIS_HISTORY = 'diagnosis_history',
    REPAIR_PROGRESS = 'repair_progress',
    REPAIR_DETAIL = 'repair_detail',
    REPAIR_EXPORT_STATUS = 'repair_export_status'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowJobDetailRequestCompareTypeEnum {
    OBJECT_COMPARE = 'object_compare',
    LINE_COMPARE = 'line_compare',
    CONTENT_COMPARE = 'content_compare',
    DATA_COMPARE = 'data_compare'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowJobDetailRequestQueryTypeEnum {
    OVERVIEW = 'overview',
    LIST = 'list',
    DETAIL = 'detail',
    DIFF = 'diff'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowJobDetailRequestObjectTypeEnum {
    DB = 'DB',
    TABLE = 'TABLE',
    INDEX = 'INDEX'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowJobDetailRequestCompareDetailTypeEnum {
    COMPARE = 'compare',
    UNCOMPARE = 'uncompare'
}
