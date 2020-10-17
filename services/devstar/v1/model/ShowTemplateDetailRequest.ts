

export class ShowTemplateDetailRequest {
    public xLanguage?: ShowTemplateDetailRequestXLanguageEnum;
    public templateId: string;
    public constructor(templateId: any) { 
        this.templateId = templateId;
    }
    public withXLanguage(xLanguage?: ShowTemplateDetailRequestXLanguageEnum): ShowTemplateDetailRequest {
        this.xLanguage = xLanguage;
        return this;
    }
    public withTemplateId(templateId: string): ShowTemplateDetailRequest {
        this.templateId = templateId;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowTemplateDetailRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
