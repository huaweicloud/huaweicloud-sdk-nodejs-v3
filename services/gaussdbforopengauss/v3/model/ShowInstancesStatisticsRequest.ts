

export class ShowInstancesStatisticsRequest {
    private 'X-Language'?: ShowInstancesStatisticsRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowInstancesStatisticsRequestXLanguageEnum | string): ShowInstancesStatisticsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowInstancesStatisticsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowInstancesStatisticsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInstancesStatisticsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
