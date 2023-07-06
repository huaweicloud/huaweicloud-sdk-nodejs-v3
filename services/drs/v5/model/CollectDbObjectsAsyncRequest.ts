

export class CollectDbObjectsAsyncRequest {
    private 'job_id': string | undefined;
    private 'X-Language'?: CollectDbObjectsAsyncRequestXLanguageEnum | undefined;
    public offset?: number;
    public limit?: number;
    public type: CollectDbObjectsAsyncRequestTypeEnum;
    private 'is_refresh'?: boolean | undefined;
    private 'db_names'?: Array<string> | undefined;
    public constructor(jobId?: any, type?: any) { 
        this['job_id'] = jobId;
        this['type'] = type;
    }
    public withJobId(jobId: string): CollectDbObjectsAsyncRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: CollectDbObjectsAsyncRequestXLanguageEnum): CollectDbObjectsAsyncRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CollectDbObjectsAsyncRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withOffset(offset: number): CollectDbObjectsAsyncRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): CollectDbObjectsAsyncRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: CollectDbObjectsAsyncRequestTypeEnum): CollectDbObjectsAsyncRequest {
        this['type'] = type;
        return this;
    }
    public withIsRefresh(isRefresh: boolean): CollectDbObjectsAsyncRequest {
        this['is_refresh'] = isRefresh;
        return this;
    }
    public set isRefresh(isRefresh: boolean | undefined) {
        this['is_refresh'] = isRefresh;
    }
    public get isRefresh() {
        return this['is_refresh'];
    }
    public withDbNames(dbNames: Array<string>): CollectDbObjectsAsyncRequest {
        this['db_names'] = dbNames;
        return this;
    }
    public set dbNames(dbNames: Array<string> | undefined) {
        this['db_names'] = dbNames;
    }
    public get dbNames() {
        return this['db_names'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CollectDbObjectsAsyncRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
/**
    * @export
    * @enum {string}
    */
export enum CollectDbObjectsAsyncRequestTypeEnum {
    SOURCE = 'source',
    MODIFIED = 'modified',
    SYNCHRONIZED = 'synchronized'
}
