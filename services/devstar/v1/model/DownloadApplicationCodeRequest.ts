

export class DownloadApplicationCodeRequest {
    private 'X-Language'?: DownloadApplicationCodeRequestXLanguageEnum | undefined;
    private 'job_id': string | undefined;
    public constructor(jobId: any) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: DownloadApplicationCodeRequestXLanguageEnum): DownloadApplicationCodeRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DownloadApplicationCodeRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withJobId(jobId: string): DownloadApplicationCodeRequest {
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
export enum DownloadApplicationCodeRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
