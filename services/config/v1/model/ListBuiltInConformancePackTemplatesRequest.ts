

export class ListBuiltInConformancePackTemplatesRequest {
    public limit?: number;
    public marker?: string;
    private 'template_key'?: string;
    private 'X-Language'?: ListBuiltInConformancePackTemplatesRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withLimit(limit: number): ListBuiltInConformancePackTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListBuiltInConformancePackTemplatesRequest {
        this['marker'] = marker;
        return this;
    }
    public withTemplateKey(templateKey: string): ListBuiltInConformancePackTemplatesRequest {
        this['template_key'] = templateKey;
        return this;
    }
    public set templateKey(templateKey: string  | undefined) {
        this['template_key'] = templateKey;
    }
    public get templateKey(): string | undefined {
        return this['template_key'];
    }
    public withXLanguage(xLanguage: ListBuiltInConformancePackTemplatesRequestXLanguageEnum | string): ListBuiltInConformancePackTemplatesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListBuiltInConformancePackTemplatesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListBuiltInConformancePackTemplatesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListBuiltInConformancePackTemplatesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us',
    FR_FR = 'fr-fr',
    ES_US = 'es-us',
    PT_BR = 'pt-br'
}
