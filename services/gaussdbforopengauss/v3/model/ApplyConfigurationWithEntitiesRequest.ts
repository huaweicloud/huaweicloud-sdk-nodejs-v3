import { ApplyConfigurationEntityRequestBody } from './ApplyConfigurationEntityRequestBody';


export class ApplyConfigurationWithEntitiesRequest {
    private 'X-Language'?: ApplyConfigurationWithEntitiesRequestXLanguageEnum | string;
    private 'config_id'?: string;
    public body?: ApplyConfigurationEntityRequestBody;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withXLanguage(xLanguage: ApplyConfigurationWithEntitiesRequestXLanguageEnum | string): ApplyConfigurationWithEntitiesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ApplyConfigurationWithEntitiesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ApplyConfigurationWithEntitiesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withConfigId(configId: string): ApplyConfigurationWithEntitiesRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withBody(body: ApplyConfigurationEntityRequestBody): ApplyConfigurationWithEntitiesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApplyConfigurationWithEntitiesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
