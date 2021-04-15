

export class ShowJobDetailRequest {
    private 'X-Language'?: ShowJobDetailRequestXLanguageEnum | undefined;
    private 'job_id': string | undefined;
    public constructor(jobId?: any) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: ShowJobDetailRequestXLanguageEnum): ShowJobDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowJobDetailRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ShowJobDetailRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowJobDetailRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
