import { ConfigurationForCreation } from './ConfigurationForCreation';


export class CreateConfigurationRequest {
    private 'X-Language'?: CreateConfigurationRequestXLanguageEnum | string;
    public body?: ConfigurationForCreation;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateConfigurationRequestXLanguageEnum | string): CreateConfigurationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateConfigurationRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateConfigurationRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ConfigurationForCreation): CreateConfigurationRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateConfigurationRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
