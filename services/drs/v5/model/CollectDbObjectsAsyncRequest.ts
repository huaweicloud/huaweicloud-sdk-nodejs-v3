

export class CollectDbObjectsAsyncRequest {
    private 'job_id'?: string;
    private 'X-Language'?: CollectDbObjectsAsyncRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public type?: CollectDbObjectsAsyncRequestTypeEnum | string;
    private 'is_refresh'?: boolean;
    private 'db_names'?: Array<string>;
    public constructor(jobId?: string, type?: string) { 
        this['job_id'] = jobId;
        this['type'] = type;
    }
    public withJobId(jobId: string): CollectDbObjectsAsyncRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: CollectDbObjectsAsyncRequestXLanguageEnum | string): CollectDbObjectsAsyncRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CollectDbObjectsAsyncRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CollectDbObjectsAsyncRequestXLanguageEnum | string | undefined {
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
    public withType(type: CollectDbObjectsAsyncRequestTypeEnum | string): CollectDbObjectsAsyncRequest {
        this['type'] = type;
        return this;
    }
    public withIsRefresh(isRefresh: boolean): CollectDbObjectsAsyncRequest {
        this['is_refresh'] = isRefresh;
        return this;
    }
    public set isRefresh(isRefresh: boolean  | undefined) {
        this['is_refresh'] = isRefresh;
    }
    public get isRefresh(): boolean | undefined {
        return this['is_refresh'];
    }
    public withDbNames(dbNames: Array<string>): CollectDbObjectsAsyncRequest {
        this['db_names'] = dbNames;
        return this;
    }
    public set dbNames(dbNames: Array<string>  | undefined) {
        this['db_names'] = dbNames;
    }
    public get dbNames(): Array<string> | undefined {
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
