

export class ShowColumnInfoResultRequest {
    private 'job_id'?: string;
    private 'X-Language'?: ShowColumnInfoResultRequestXLanguageEnum | string;
    private 'query_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(jobId?: string, queryId?: string) { 
        this['job_id'] = jobId;
        this['query_id'] = queryId;
    }
    public withJobId(jobId: string): ShowColumnInfoResultRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ShowColumnInfoResultRequestXLanguageEnum | string): ShowColumnInfoResultRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowColumnInfoResultRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowColumnInfoResultRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withQueryId(queryId: string): ShowColumnInfoResultRequest {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
    public withOffset(offset: number): ShowColumnInfoResultRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowColumnInfoResultRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowColumnInfoResultRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
