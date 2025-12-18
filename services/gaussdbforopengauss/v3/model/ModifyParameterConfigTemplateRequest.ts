import { ModifyParameterConfigTemplateRequestBody } from './ModifyParameterConfigTemplateRequestBody';


export class ModifyParameterConfigTemplateRequest {
    private 'X-Language'?: ModifyParameterConfigTemplateRequestXLanguageEnum | string;
    private 'config_id'?: string;
    public body?: ModifyParameterConfigTemplateRequestBody;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withXLanguage(xLanguage: ModifyParameterConfigTemplateRequestXLanguageEnum | string): ModifyParameterConfigTemplateRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ModifyParameterConfigTemplateRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ModifyParameterConfigTemplateRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withConfigId(configId: string): ModifyParameterConfigTemplateRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withBody(body: ModifyParameterConfigTemplateRequestBody): ModifyParameterConfigTemplateRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyParameterConfigTemplateRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
