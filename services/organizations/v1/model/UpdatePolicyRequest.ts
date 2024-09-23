import { UpdatePolicyReqBody } from './UpdatePolicyReqBody';


export class UpdatePolicyRequest {
    private 'X-Security-Token'?: string;
    private 'policy_id'?: string;
    private 'X-Language'?: UpdatePolicyRequestXLanguageEnum | string;
    public body?: UpdatePolicyReqBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withXSecurityToken(xSecurityToken: string): UpdatePolicyRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withPolicyId(policyId: string): UpdatePolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withXLanguage(xLanguage: UpdatePolicyRequestXLanguageEnum | string): UpdatePolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdatePolicyRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdatePolicyRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpdatePolicyReqBody): UpdatePolicyRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatePolicyRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
