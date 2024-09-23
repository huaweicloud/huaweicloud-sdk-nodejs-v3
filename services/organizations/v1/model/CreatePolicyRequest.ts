import { CreatePolicyReqBody } from './CreatePolicyReqBody';


export class CreatePolicyRequest {
    private 'X-Security-Token'?: string;
    private 'X-Language'?: CreatePolicyRequestXLanguageEnum | string;
    public body?: CreatePolicyReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): CreatePolicyRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
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
