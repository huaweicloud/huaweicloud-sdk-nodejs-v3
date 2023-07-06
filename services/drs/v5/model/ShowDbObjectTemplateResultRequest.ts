

export class ShowDbObjectTemplateResultRequest {
    private 'job_id': string | undefined;
    private 'X-Language'?: ShowDbObjectTemplateResultRequestXLanguageEnum | undefined;
    public type: ShowDbObjectTemplateResultRequestTypeEnum;
    public constructor(jobId?: any, type?: any) { 
        this['job_id'] = jobId;
        this['type'] = type;
    }
    public withJobId(jobId: string): ShowDbObjectTemplateResultRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ShowDbObjectTemplateResultRequestXLanguageEnum): ShowDbObjectTemplateResultRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowDbObjectTemplateResultRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withType(type: ShowDbObjectTemplateResultRequestTypeEnum): ShowDbObjectTemplateResultRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDbObjectTemplateResultRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowDbObjectTemplateResultRequestTypeEnum {
    DETAIL = 'detail',
    SYNCHRONIZED = 'synchronized'
}
