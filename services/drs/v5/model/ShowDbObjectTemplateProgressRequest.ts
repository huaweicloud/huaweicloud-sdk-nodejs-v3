

export class ShowDbObjectTemplateProgressRequest {
    private 'job_id'?: string;
    private 'X-Language'?: ShowDbObjectTemplateProgressRequestXLanguageEnum | string;
    public offset?: number;
    public limit?: number;
    public type?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ShowDbObjectTemplateProgressRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ShowDbObjectTemplateProgressRequestXLanguageEnum | string): ShowDbObjectTemplateProgressRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowDbObjectTemplateProgressRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowDbObjectTemplateProgressRequestXLanguageEnum | string | undefined {
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
    public withType(type: string): ShowDbObjectTemplateProgressRequest {
        this['type'] = type;
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
