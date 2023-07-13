

export class ListLinksRequest {
    private 'X-Language'?: ListLinksRequestXLanguageEnum | undefined;
    private 'job_type': ListLinksRequestJobTypeEnum | undefined;
    public offset?: number;
    public limit?: number;
    public constructor(jobType?: any) { 
        this['job_type'] = jobType;
    }
    public withXLanguage(xLanguage: ListLinksRequestXLanguageEnum): ListLinksRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListLinksRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withJobType(jobType: ListLinksRequestJobTypeEnum): ListLinksRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: ListLinksRequestJobTypeEnum | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType() {
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
