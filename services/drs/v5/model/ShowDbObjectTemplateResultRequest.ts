

export class ShowDbObjectTemplateResultRequest {
    private 'job_id'?: string;
    private 'X-Language'?: ShowDbObjectTemplateResultRequestXLanguageEnum | string;
    public type?: ShowDbObjectTemplateResultRequestTypeEnum | string;
    private 'file_export_object_level'?: string;
    public constructor(jobId?: string, type?: string) { 
        this['job_id'] = jobId;
        this['type'] = type;
    }
    public withJobId(jobId: string): ShowDbObjectTemplateResultRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: ShowDbObjectTemplateResultRequestXLanguageEnum | string): ShowDbObjectTemplateResultRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowDbObjectTemplateResultRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowDbObjectTemplateResultRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withType(type: ShowDbObjectTemplateResultRequestTypeEnum | string): ShowDbObjectTemplateResultRequest {
        this['type'] = type;
        return this;
    }
    public withFileExportObjectLevel(fileExportObjectLevel: string): ShowDbObjectTemplateResultRequest {
        this['file_export_object_level'] = fileExportObjectLevel;
        return this;
    }
    public set fileExportObjectLevel(fileExportObjectLevel: string  | undefined) {
        this['file_export_object_level'] = fileExportObjectLevel;
    }
    public get fileExportObjectLevel(): string | undefined {
        return this['file_export_object_level'];
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
    SYNCHRONIZED = 'synchronized',
    CHANGE = 'change'
}
