

export class ListAsyncJobDetailRequest {
    private 'async_job_id': string | undefined;
    private 'X-Language'?: ListAsyncJobDetailRequestXLanguageEnum | undefined;
    public offset?: number;
    public limit?: number;
    public constructor(asyncJobId?: any) { 
        this['async_job_id'] = asyncJobId;
    }
    public withAsyncJobId(asyncJobId: string): ListAsyncJobDetailRequest {
        this['async_job_id'] = asyncJobId;
        return this;
    }
    public set asyncJobId(asyncJobId: string | undefined) {
        this['async_job_id'] = asyncJobId;
    }
    public get asyncJobId() {
        return this['async_job_id'];
    }
    public withXLanguage(xLanguage: ListAsyncJobDetailRequestXLanguageEnum): ListAsyncJobDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListAsyncJobDetailRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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
