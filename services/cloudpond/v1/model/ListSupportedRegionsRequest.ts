

export class ListSupportedRegionsRequest {
    private 'X-Language'?: ListSupportedRegionsRequestXLanguageEnum | string;
    public limit?: number;
    public marker?: string;
    private 'sort_key'?: Array<string>;
    private 'sort_dir'?: Array<string>;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListSupportedRegionsRequestXLanguageEnum | string): ListSupportedRegionsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListSupportedRegionsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListSupportedRegionsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withLimit(limit: number): ListSupportedRegionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSupportedRegionsRequest {
        this['marker'] = marker;
        return this;
    }
    public withSortKey(sortKey: Array<string>): ListSupportedRegionsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<string>): ListSupportedRegionsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<string> | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSupportedRegionsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us',
    PT_BR = 'pt-br',
    ES_US = 'es-us',
    ES_ES = 'es-es'
}
