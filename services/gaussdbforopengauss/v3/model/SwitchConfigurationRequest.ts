import { ApplyConfigurationRequestBody } from './ApplyConfigurationRequestBody';


export class SwitchConfigurationRequest {
    private 'X-Language'?: SwitchConfigurationRequestXLanguageEnum | string;
    private 'config_id'?: string;
    public body?: ApplyConfigurationRequestBody;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withXLanguage(xLanguage: SwitchConfigurationRequestXLanguageEnum | string): SwitchConfigurationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: SwitchConfigurationRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): SwitchConfigurationRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withConfigId(configId: string): SwitchConfigurationRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withBody(body: ApplyConfigurationRequestBody): SwitchConfigurationRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchConfigurationRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
