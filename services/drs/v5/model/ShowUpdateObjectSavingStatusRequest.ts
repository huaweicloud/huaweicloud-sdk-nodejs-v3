

export class ShowUpdateObjectSavingStatusRequest {
    private 'job_id'?: string;
    private 'X-Language'?: ShowUpdateObjectSavingStatusRequestXLanguageEnum | string;
    private 'query_id'?: string;
    public constructor(jobId?: string, queryId?: string) { 
        this['job_id'] = jobId;
        this['query_id'] = queryId;
    }
    public withJobId(jobId: string): ShowUpdateObjectSavingStatusRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ShowUpdateObjectSavingStatusRequestXLanguageEnum | string): ShowUpdateObjectSavingStatusRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowUpdateObjectSavingStatusRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowUpdateObjectSavingStatusRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withQueryId(queryId: string): ShowUpdateObjectSavingStatusRequest {
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
export enum ShowUpdateObjectSavingStatusRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
