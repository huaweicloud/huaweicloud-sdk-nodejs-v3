import { UpdatePolicyReqBody } from './UpdatePolicyReqBody';


export class UpdatePolicyRequest {
    private 'policy_id'?: string;
    private 'X-Language'?: UpdatePolicyRequestXLanguageEnum | string;
    public body?: UpdatePolicyReqBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
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
