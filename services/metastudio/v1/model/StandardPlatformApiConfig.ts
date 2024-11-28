

export class StandardPlatformApiConfig {
    private 'api_type'?: StandardPlatformApiConfigApiTypeEnum | string;
    public url?: string;
    public constructor(apiType?: string, url?: string) { 
        this['api_type'] = apiType;
        this['url'] = url;
    }
    public withApiType(apiType: StandardPlatformApiConfigApiTypeEnum | string): StandardPlatformApiConfig {
        this['api_type'] = apiType;
        return this;
    }
    public set apiType(apiType: StandardPlatformApiConfigApiTypeEnum | string  | undefined) {
        this['api_type'] = apiType;
    }
    public get apiType(): StandardPlatformApiConfigApiTypeEnum | string | undefined {
        return this['api_type'];
    }
    public withUrl(url: string): StandardPlatformApiConfig {
        this['url'] = url;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StandardPlatformApiConfigApiTypeEnum {
    PRODUCT_QUERY = 'PRODUCT_QUERY',
    LIVE_EVENT_CALLBACK = 'LIVE_EVENT_CALLBACK'
}
