

export class ListLinksRequest {
    private 'X-Language'?: ListLinksRequestXLanguageEnum | string;
    private 'job_type'?: ListLinksRequestJobTypeEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(jobType?: string) { 
        this['job_type'] = jobType;
    }
    public withXLanguage(xLanguage: ListLinksRequestXLanguageEnum | string): ListLinksRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListLinksRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListLinksRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobType(jobType: ListLinksRequestJobTypeEnum | string): ListLinksRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ListLinksRequestJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): ListLinksRequestJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withOffset(offset: number): ListLinksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListLinksRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListLinksRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
/**
    * @export
    * @enum {string}
    */
export enum ListLinksRequestJobTypeEnum {
    MIGRATION = 'migration',
    SYNC = 'sync',
    CLOUDDATAGUARD = 'cloudDataGuard'
}
