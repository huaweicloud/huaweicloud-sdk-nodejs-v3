

export class ShowTemplateFileRequest {
    private 'X-Language'?: ShowTemplateFileRequestXLanguageEnum | undefined;
    private 'template_id': string | undefined;
    private 'file_path': string | undefined;
    public type?: ShowTemplateFileRequestTypeEnum;
    public constructor(templateId: any, filePath: any) { 
        this['template_id'] = templateId;
        this['file_path'] = filePath;
    }
    public withXLanguage(xLanguage: ShowTemplateFileRequestXLanguageEnum): ShowTemplateFileRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowTemplateFileRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withTemplateId(templateId: string): ShowTemplateFileRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
        return this['template_id'];
    }
    public withFilePath(filePath: string): ShowTemplateFileRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath() {
        return this['file_path'];
    }
    public withType(type: ShowTemplateFileRequestTypeEnum): ShowTemplateFileRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowTemplateFileRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowTemplateFileRequestTypeEnum {
    SOURCE_PACKAGE = 'source-package',
    INTRODUCTION = 'introduction'
}
