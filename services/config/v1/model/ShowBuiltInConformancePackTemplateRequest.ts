

export class ShowBuiltInConformancePackTemplateRequest {
    private 'template_id'?: string;
    private 'X-Language'?: ShowBuiltInConformancePackTemplateRequestXLanguageEnum | string;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: string): ShowBuiltInConformancePackTemplateRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withXLanguage(xLanguage: ShowBuiltInConformancePackTemplateRequestXLanguageEnum | string): ShowBuiltInConformancePackTemplateRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowBuiltInConformancePackTemplateRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowBuiltInConformancePackTemplateRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowBuiltInConformancePackTemplateRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
