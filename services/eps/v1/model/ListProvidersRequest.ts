

export class ListProvidersRequest {
    public locale?: ListProvidersRequestLocaleEnum;
    public limit?: number;
    public offset?: number;
    public provider?: string;
    public constructor() { 
    }
    public withLocale(locale: ListProvidersRequestLocaleEnum): ListProvidersRequest {
        this['locale'] = locale;
        return this;
    }
    public withLimit(limit: number): ListProvidersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListProvidersRequest {
        this['offset'] = offset;
        return this;
    }
    public withProvider(provider: string): ListProvidersRequest {
        this['provider'] = provider;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProvidersRequestLocaleEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
