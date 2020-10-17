

export class ShowJobDetailRequest {
    public xLanguage?: ShowJobDetailRequestXLanguageEnum;
    public jobId: string;
    public constructor(jobId: any) { 
        this.jobId = jobId;
    }
    public withXLanguage(xLanguage?: ShowJobDetailRequestXLanguageEnum): ShowJobDetailRequest {
        this.xLanguage = xLanguage;
        return this;
    }
    public withJobId(jobId: string): ShowJobDetailRequest {
        this.jobId = jobId;
        return this;
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
