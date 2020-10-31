

export class ListTemplateViewHistoriesRequest {
    private 'X-Language'?: ListTemplateViewHistoriesRequestXLanguageEnum | undefined;
    private 'platform_source': ListTemplateViewHistoriesRequestPlatformSourceEnum | undefined;
    public constructor(platformSource: any) { 
        this['platform_source'] = platformSource;
    }
    public withXLanguage(xLanguage: ListTemplateViewHistoriesRequestXLanguageEnum): ListTemplateViewHistoriesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListTemplateViewHistoriesRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withPlatformSource(platformSource: ListTemplateViewHistoriesRequestPlatformSourceEnum): ListTemplateViewHistoriesRequest {
        this['platform_source'] = platformSource;
        return this;
    }
    public set platformSource(platformSource: ListTemplateViewHistoriesRequestPlatformSourceEnum | undefined) {
        this['platform_source'] = platformSource;
    }
    public get platformSource() {
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
