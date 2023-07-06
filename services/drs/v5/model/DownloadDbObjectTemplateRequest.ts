

export class DownloadDbObjectTemplateRequest {
    private 'job_id': string | undefined;
    private 'X-Language'?: DownloadDbObjectTemplateRequestXLanguageEnum | undefined;
    public constructor(jobId?: any) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): DownloadDbObjectTemplateRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: DownloadDbObjectTemplateRequestXLanguageEnum): DownloadDbObjectTemplateRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DownloadDbObjectTemplateRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DownloadDbObjectTemplateRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
