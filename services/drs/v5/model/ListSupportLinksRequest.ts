

export class ListSupportLinksRequest {
    private 'X-Language'?: ListSupportLinksRequestXLanguageEnum | string;
    private 'job_type'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(jobType?: string) { 
        this['job_type'] = jobType;
    }
    public withXLanguage(xLanguage: ListSupportLinksRequestXLanguageEnum | string): ListSupportLinksRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSupportLinksRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSupportLinksRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobType(jobType: string): ListSupportLinksRequest {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withOffset(offset: number): ListSupportLinksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSupportLinksRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSupportLinksRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
