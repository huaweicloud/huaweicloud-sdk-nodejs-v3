

export class GetPolicyV5Request {
    private 'policy_id'?: string;
    private 'X-Language'?: GetPolicyV5RequestXLanguageEnum | string;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): GetPolicyV5Request {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withXLanguage(xLanguage: GetPolicyV5RequestXLanguageEnum | string): GetPolicyV5Request {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: GetPolicyV5RequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): GetPolicyV5RequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetPolicyV5RequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
