

export class ShowJobDetailRequest {
    private 'job_id': string | undefined;
    private 'X-Language'?: ShowJobDetailRequestXLanguageEnum | undefined;
    public type: ShowJobDetailRequestTypeEnum;
    private 'query_id'?: string | undefined;
    public offset?: number;
    public limit?: number;
    private 'compare_type'?: ShowJobDetailRequestCompareTypeEnum | undefined;
    private 'query_type'?: ShowJobDetailRequestQueryTypeEnum | undefined;
    private 'object_type'?: ShowJobDetailRequestObjectTypeEnum | undefined;
    private 'compare_task_id'?: string | undefined;
    private 'source_db_name'?: string | undefined;
    private 'target_db_name'?: string | undefined;
    private 'compare_detail_type'?: ShowJobDetailRequestCompareDetailTypeEnum | undefined;
    public constructor(jobId?: any, type?: any) { 
        this['job_id'] = jobId;
        this['type'] = type;
    }
    public withJobId(jobId: string): ShowJobDetailRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ShowJobDetailRequestXLanguageEnum): ShowJobDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowJobDetailRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withType(type: ShowJobDetailRequestTypeEnum): ShowJobDetailRequest {
        this['type'] = type;
        return this;
    }
    public withQueryId(queryId: string): ShowJobDetailRequest {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId() {
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
    public withCompareType(compareType: ShowJobDetailRequestCompareTypeEnum): ShowJobDetailRequest {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: ShowJobDetailRequestCompareTypeEnum | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType() {
        return this['compare_type'];
    }
    public withQueryType(queryType: ShowJobDetailRequestQueryTypeEnum): ShowJobDetailRequest {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: ShowJobDetailRequestQueryTypeEnum | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType() {
        return this['query_type'];
    }
    public withObjectType(objectType: ShowJobDetailRequestObjectTypeEnum): ShowJobDetailRequest {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: ShowJobDetailRequestObjectTypeEnum | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType() {
        return this['object_type'];
    }
    public withCompareTaskId(compareTaskId: string): ShowJobDetailRequest {
        this['compare_task_id'] = compareTaskId;
        return this;
    }
    public set compareTaskId(compareTaskId: string | undefined) {
        this['compare_task_id'] = compareTaskId;
    }
    public get compareTaskId() {
        return this['compare_task_id'];
    }
    public withSourceDbName(sourceDbName: string): ShowJobDetailRequest {
        this['source_db_name'] = sourceDbName;
        return this;
    }
    public set sourceDbName(sourceDbName: string | undefined) {
        this['source_db_name'] = sourceDbName;
    }
    public get sourceDbName() {
        return this['source_db_name'];
    }
    public withTargetDbName(targetDbName: string): ShowJobDetailRequest {
        this['target_db_name'] = targetDbName;
        return this;
    }
    public set targetDbName(targetDbName: string | undefined) {
        this['target_db_name'] = targetDbName;
    }
    public get targetDbName() {
        return this['target_db_name'];
    }
    public withCompareDetailType(compareDetailType: ShowJobDetailRequestCompareDetailTypeEnum): ShowJobDetailRequest {
        this['compare_detail_type'] = compareDetailType;
        return this;
    }
    public set compareDetailType(compareDetailType: ShowJobDetailRequestCompareDetailTypeEnum | undefined) {
        this['compare_detail_type'] = compareDetailType;
    }
    public get compareDetailType() {
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
    COMAPRE = 'comapre'
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
    DETAIL = 'detail'
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
