

export class ShowParameterGroupDetailRequest {
    private 'X-Language'?: ShowParameterGroupDetailRequestXLanguageEnum | string;
    private 'config_id'?: string;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withXLanguage(xLanguage: ShowParameterGroupDetailRequestXLanguageEnum | string): ShowParameterGroupDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowParameterGroupDetailRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowParameterGroupDetailRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withConfigId(configId: string): ShowParameterGroupDetailRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowParameterGroupDetailRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
