

export class ListProvidersRequest {
    public offset?: number;
    public limit?: number;
    public track?: ListProvidersRequestTrackEnum;
    private 'X-Language'?: ListProvidersRequestXLanguageEnum | undefined;
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
    public withTrack(track: ListProvidersRequestTrackEnum): ListProvidersRequest {
        this['track'] = track;
        return this;
    }
    public withXLanguage(xLanguage: ListProvidersRequestXLanguageEnum): ListProvidersRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListProvidersRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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
    EN_US = 'en-us'
}
