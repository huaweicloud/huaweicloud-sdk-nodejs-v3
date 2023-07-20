

export class PreviewTemplateBody {
    public templates?: string;
    public language?: PreviewTemplateBodyLanguageEnum | string;
    public source?: string;
    public constructor(templates?: string, language?: string, source?: string) { 
        this['templates'] = templates;
        this['language'] = language;
        this['source'] = source;
    }
    public withTemplates(templates: string): PreviewTemplateBody {
        this['templates'] = templates;
        return this;
    }
    public withLanguage(language: PreviewTemplateBodyLanguageEnum | string): PreviewTemplateBody {
        this['language'] = language;
        return this;
    }
    public withSource(source: string): PreviewTemplateBody {
        this['source'] = source;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PreviewTemplateBodyLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
