

export class ShowTemplateV3Request {
    private 'X-Language'?: ShowTemplateV3RequestXLanguageEnum | string;
    private 'template_id'?: string;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
    }
    public withXLanguage(xLanguage: ShowTemplateV3RequestXLanguageEnum | string): ShowTemplateV3Request {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowTemplateV3RequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowTemplateV3RequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withTemplateId(templateId: string): ShowTemplateV3Request {
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
export enum ShowTemplateV3RequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
