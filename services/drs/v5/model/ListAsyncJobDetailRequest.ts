

export class ListAsyncJobDetailRequest {
    private 'async_job_id'?: string;
    private 'X-Language'?: ListAsyncJobDetailRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(asyncJobId?: string) { 
        this['async_job_id'] = asyncJobId;
    }
    public withAsyncJobId(asyncJobId: string): ListAsyncJobDetailRequest {
        this['async_job_id'] = asyncJobId;
        return this;
    }
    public set asyncJobId(asyncJobId: string  | undefined) {
        this['async_job_id'] = asyncJobId;
    }
    public get asyncJobId(): string | undefined {
        return this['async_job_id'];
    }
    public withXLanguage(xLanguage: ListAsyncJobDetailRequestXLanguageEnum | string): ListAsyncJobDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListAsyncJobDetailRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListAsyncJobDetailRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListAsyncJobDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAsyncJobDetailRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAsyncJobDetailRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
