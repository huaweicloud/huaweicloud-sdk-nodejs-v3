import { UpdatePolicyReqBody } from './UpdatePolicyReqBody';


export class UpdateDryRunPolicyRequest {
    private 'X-Security-Token'?: string;
    private 'policy_id'?: string;
    private 'X-Language'?: UpdateDryRunPolicyRequestXLanguageEnum | string;
    public body?: UpdatePolicyReqBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withXSecurityToken(xSecurityToken: string): UpdateDryRunPolicyRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withPolicyId(policyId: string): UpdateDryRunPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withXLanguage(xLanguage: UpdateDryRunPolicyRequestXLanguageEnum | string): UpdateDryRunPolicyRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateDryRunPolicyRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateDryRunPolicyRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpdatePolicyReqBody): UpdateDryRunPolicyRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDryRunPolicyRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
