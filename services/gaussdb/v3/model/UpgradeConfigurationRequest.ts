import { UpgradeConfigurationRequestBody } from './UpgradeConfigurationRequestBody';


export class UpgradeConfigurationRequest {
    private 'X-Language'?: UpgradeConfigurationRequestXLanguageEnum | string;
    private 'configuration_id'?: string;
    public body?: UpgradeConfigurationRequestBody;
    public constructor(configurationId?: string) { 
        this['configuration_id'] = configurationId;
    }
    public withXLanguage(xLanguage: UpgradeConfigurationRequestXLanguageEnum | string): UpgradeConfigurationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpgradeConfigurationRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpgradeConfigurationRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withConfigurationId(configurationId: string): UpgradeConfigurationRequest {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withBody(body: UpgradeConfigurationRequestBody): UpgradeConfigurationRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpgradeConfigurationRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
