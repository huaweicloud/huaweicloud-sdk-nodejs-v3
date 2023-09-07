

export class ShowDbObjectsListRequest {
    private 'job_id'?: string;
    private 'X-Language'?: ShowDbObjectsListRequestXLanguageEnum | string;
    public type?: string;
    public constructor(jobId?: string, type?: string) { 
        this['job_id'] = jobId;
        this['type'] = type;
    }
    public withJobId(jobId: string): ShowDbObjectsListRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ShowDbObjectsListRequestXLanguageEnum | string): ShowDbObjectsListRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowDbObjectsListRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowDbObjectsListRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withType(type: string): ShowDbObjectsListRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDbObjectsListRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
