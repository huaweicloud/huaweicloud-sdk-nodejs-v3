import { CreatePolicyReqBody } from './CreatePolicyReqBody';


export class CreatePolicyRequest {
    private 'X-Language'?: CreatePolicyRequestXLanguageEnum | string;
    public body?: CreatePolicyReqBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreatePolicyRequestXLanguageEnum | string): CreatePolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreatePolicyRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreatePolicyRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreatePolicyReqBody): CreatePolicyRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePolicyRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
