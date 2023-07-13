

export class ShowTemplateDetailRequest {
    private 'X-Language'?: ShowTemplateDetailRequestXLanguageEnum | undefined;
    private 'template_id': string | undefined;
    public constructor(templateId?: any) { 
        this['template_id'] = templateId;
    }
    public withXLanguage(xLanguage: ShowTemplateDetailRequestXLanguageEnum): ShowTemplateDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowTemplateDetailRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withTemplateId(templateId: string): ShowTemplateDetailRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId() {
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
