

export class ShowPolicyRequest {
    private 'X-Security-Token'?: string;
    private 'policy_id'?: string;
    private 'X-Language'?: ShowPolicyRequestXLanguageEnum | string;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withXSecurityToken(xSecurityToken: string): ShowPolicyRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withPolicyId(policyId: string): ShowPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withXLanguage(xLanguage: ShowPolicyRequestXLanguageEnum | string): ShowPolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowPolicyRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowPolicyRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowPolicyRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
