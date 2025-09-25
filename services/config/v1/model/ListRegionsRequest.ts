

export class ListRegionsRequest {
    private 'X-Language'?: ListRegionsRequestXLanguageEnum | string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListRegionsRequestXLanguageEnum | string): ListRegionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListRegionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListRegionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withLimit(limit: number): ListRegionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListRegionsRequest {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRegionsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us',
    FR_FR = 'fr-fr',
    ES_US = 'es-us',
    PT_BR = 'pt-br'
}
