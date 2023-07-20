

export class ListTemplateViewHistoriesRequest {
    private 'X-Language'?: ListTemplateViewHistoriesRequestXLanguageEnum | string;
    private 'platform_source'?: ListTemplateViewHistoriesRequestPlatformSourceEnum | number;
    public constructor(platformSource?: number) { 
        this['platform_source'] = platformSource;
    }
    public withXLanguage(xLanguage: ListTemplateViewHistoriesRequestXLanguageEnum | string): ListTemplateViewHistoriesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListTemplateViewHistoriesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListTemplateViewHistoriesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withPlatformSource(platformSource: ListTemplateViewHistoriesRequestPlatformSourceEnum | number): ListTemplateViewHistoriesRequest {
        this['platform_source'] = platformSource;
        return this;
    }
    public set platformSource(platformSource: ListTemplateViewHistoriesRequestPlatformSourceEnum | number  | undefined) {
        this['platform_source'] = platformSource;
    }
    public get platformSource(): ListTemplateViewHistoriesRequestPlatformSourceEnum | number | undefined {
        return this['platform_source'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTemplateViewHistoriesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ListTemplateViewHistoriesRequestPlatformSourceEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
