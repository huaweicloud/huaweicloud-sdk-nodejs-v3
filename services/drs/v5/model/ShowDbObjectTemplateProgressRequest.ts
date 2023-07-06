

export class ShowDbObjectTemplateProgressRequest {
    private 'job_id': string | undefined;
    private 'X-Language'?: ShowDbObjectTemplateProgressRequestXLanguageEnum | undefined;
    public offset?: number;
    public limit?: number;
    public constructor(jobId?: any) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ShowDbObjectTemplateProgressRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ShowDbObjectTemplateProgressRequestXLanguageEnum): ShowDbObjectTemplateProgressRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowDbObjectTemplateProgressRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withOffset(offset: number): ShowDbObjectTemplateProgressRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowDbObjectTemplateProgressRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDbObjectTemplateProgressRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
