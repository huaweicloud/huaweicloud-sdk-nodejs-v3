import { ParamGroupCopyRequestBody } from './ParamGroupCopyRequestBody';


export class CopyConfigurationRequest {
    private 'X-Language'?: CopyConfigurationRequestXLanguageEnum | string;
    private 'config_id'?: string;
    public body?: ParamGroupCopyRequestBody;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withXLanguage(xLanguage: CopyConfigurationRequestXLanguageEnum | string): CopyConfigurationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CopyConfigurationRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CopyConfigurationRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withConfigId(configId: string): CopyConfigurationRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withBody(body: ParamGroupCopyRequestBody): CopyConfigurationRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CopyConfigurationRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
