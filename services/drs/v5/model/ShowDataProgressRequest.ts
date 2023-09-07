

export class ShowDataProgressRequest {
    private 'job_id'?: string;
    private 'X-Language'?: ShowDataProgressRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ShowDataProgressRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ShowDataProgressRequestXLanguageEnum | string): ShowDataProgressRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowDataProgressRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowDataProgressRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ShowDataProgressRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowDataProgressRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDataProgressRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
