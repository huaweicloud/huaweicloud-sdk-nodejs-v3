

export class ShowTemplateFileRequest {
    private 'X-Language'?: ShowTemplateFileRequestXLanguageEnum | string;
    private 'template_id'?: string;
    private 'file_path'?: string;
    public type?: ShowTemplateFileRequestTypeEnum | string;
    public constructor(templateId?: string, filePath?: string) { 
        this['template_id'] = templateId;
        this['file_path'] = filePath;
    }
    public withXLanguage(xLanguage: ShowTemplateFileRequestXLanguageEnum | string): ShowTemplateFileRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowTemplateFileRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowTemplateFileRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withTemplateId(templateId: string): ShowTemplateFileRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withFilePath(filePath: string): ShowTemplateFileRequest {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withType(type: ShowTemplateFileRequestTypeEnum | string): ShowTemplateFileRequest {
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
