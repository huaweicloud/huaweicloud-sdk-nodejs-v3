import { ParamGroupDiffRequestBody } from './ParamGroupDiffRequestBody';


export class ListConfigurationsDiffRequest {
    private 'X-Language'?: ListConfigurationsDiffRequestXLanguageEnum | string;
    public body?: ParamGroupDiffRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListConfigurationsDiffRequestXLanguageEnum | string): ListConfigurationsDiffRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListConfigurationsDiffRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListConfigurationsDiffRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ParamGroupDiffRequestBody): ListConfigurationsDiffRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListConfigurationsDiffRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
