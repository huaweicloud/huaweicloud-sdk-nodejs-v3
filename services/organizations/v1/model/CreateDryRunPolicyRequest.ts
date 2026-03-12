import { CreateDryRunPolicyReqBody } from './CreateDryRunPolicyReqBody';


export class CreateDryRunPolicyRequest {
    private 'X-Security-Token'?: string;
    private 'X-Language'?: CreateDryRunPolicyRequestXLanguageEnum | string;
    public body?: CreateDryRunPolicyReqBody;
    public constructor() { 
    }
    public withXSecurityToken(xSecurityToken: string): CreateDryRunPolicyRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withXLanguage(xLanguage: CreateDryRunPolicyRequestXLanguageEnum | string): CreateDryRunPolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateDryRunPolicyRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateDryRunPolicyRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateDryRunPolicyReqBody): CreateDryRunPolicyRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDryRunPolicyRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
