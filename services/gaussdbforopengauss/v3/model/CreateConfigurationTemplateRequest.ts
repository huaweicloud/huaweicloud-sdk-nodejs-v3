import { CreateConfigurationTemplateRequestBody } from './CreateConfigurationTemplateRequestBody';


export class CreateConfigurationTemplateRequest {
    private 'X-Language'?: CreateConfigurationTemplateRequestXLanguageEnum | string;
    public body?: CreateConfigurationTemplateRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateConfigurationTemplateRequestXLanguageEnum | string): CreateConfigurationTemplateRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateConfigurationTemplateRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateConfigurationTemplateRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateConfigurationTemplateRequestBody): CreateConfigurationTemplateRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateConfigurationTemplateRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
