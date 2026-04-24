

export class ListExtraColumnsRequest {
    private 'job_id'?: string;
    private 'X-Language'?: ListExtraColumnsRequestXLanguageEnum | string;
    private 'is_only_show_sent'?: boolean;
    public offset?: number;
    public limit?: number;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ListExtraColumnsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ListExtraColumnsRequestXLanguageEnum | string): ListExtraColumnsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListExtraColumnsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListExtraColumnsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withIsOnlyShowSent(isOnlyShowSent: boolean): ListExtraColumnsRequest {
        this['is_only_show_sent'] = isOnlyShowSent;
        return this;
    }
    public set isOnlyShowSent(isOnlyShowSent: boolean  | undefined) {
        this['is_only_show_sent'] = isOnlyShowSent;
    }
    public get isOnlyShowSent(): boolean | undefined {
        return this['is_only_show_sent'];
    }
    public withOffset(offset: number): ListExtraColumnsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListExtraColumnsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListExtraColumnsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
