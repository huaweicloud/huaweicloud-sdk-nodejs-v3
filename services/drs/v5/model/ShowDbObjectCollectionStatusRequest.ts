

export class ShowDbObjectCollectionStatusRequest {
    private 'job_id'?: string;
    private 'X-Language'?: ShowDbObjectCollectionStatusRequestXLanguageEnum | string;
    private 'query_id'?: string;
    public constructor(jobId?: string, queryId?: string) { 
        this['job_id'] = jobId;
        this['query_id'] = queryId;
    }
    public withJobId(jobId: string): ShowDbObjectCollectionStatusRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ShowDbObjectCollectionStatusRequestXLanguageEnum | string): ShowDbObjectCollectionStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowDbObjectCollectionStatusRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowDbObjectCollectionStatusRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withQueryId(queryId: string): ShowDbObjectCollectionStatusRequest {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDbObjectCollectionStatusRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
