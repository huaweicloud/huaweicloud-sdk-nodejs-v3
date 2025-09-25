

export class ListProvidersRequest {
    public offset?: number;
    public limit?: number;
    public track?: ListProvidersRequestTrackEnum | string;
    private 'X-Language'?: ListProvidersRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withOffset(offset: number): ListProvidersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProvidersRequest {
        this['limit'] = limit;
        return this;
    }
    public withTrack(track: ListProvidersRequestTrackEnum | string): ListProvidersRequest {
        this['track'] = track;
        return this;
    }
    public withXLanguage(xLanguage: ListProvidersRequestXLanguageEnum | string): ListProvidersRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListProvidersRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListProvidersRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProvidersRequestTrackEnum {
    TRACKED = 'tracked',
    UNTRACKED = 'untracked'
}
/**
    * @export
    * @enum {string}
    */
export enum ListProvidersRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us',
    FR_FR = 'fr-fr',
    ES_US = 'es-us',
    PT_BR = 'pt-br'
}
