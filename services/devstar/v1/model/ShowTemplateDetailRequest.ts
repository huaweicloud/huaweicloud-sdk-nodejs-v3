

export class ShowTemplateDetailRequest {
    private 'X-Language'?: ShowTemplateDetailRequestXLanguageEnum | string;
    private 'template_id'?: string;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
    }
    public withXLanguage(xLanguage: ShowTemplateDetailRequestXLanguageEnum | string): ShowTemplateDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowTemplateDetailRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowTemplateDetailRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withTemplateId(templateId: string): ShowTemplateDetailRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
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
