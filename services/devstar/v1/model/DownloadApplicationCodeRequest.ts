

export class DownloadApplicationCodeRequest {
    public xLanguage?: DownloadApplicationCodeRequestXLanguageEnum;
    public jobId: string;
    public constructor(jobId: any) { 
        this.jobId = jobId;
    }
    public withXLanguage(xLanguage?: DownloadApplicationCodeRequestXLanguageEnum): DownloadApplicationCodeRequest {
        this.xLanguage = xLanguage;
        return this;
    }
    public withJobId(jobId: string): DownloadApplicationCodeRequest {
        this.jobId = jobId;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DownloadApplicationCodeRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
