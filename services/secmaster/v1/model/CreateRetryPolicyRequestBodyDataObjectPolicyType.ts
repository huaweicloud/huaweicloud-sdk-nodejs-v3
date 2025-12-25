

export class CreateRetryPolicyRequestBodyDataObjectPolicyType {
    private 'policy_type'?: CreateRetryPolicyRequestBodyDataObjectPolicyTypePolicyTypeEnum | string;
    public constructor(policyType?: string) { 
        this['policy_type'] = policyType;
    }
    public withPolicyType(policyType: CreateRetryPolicyRequestBodyDataObjectPolicyTypePolicyTypeEnum | string): CreateRetryPolicyRequestBodyDataObjectPolicyType {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: CreateRetryPolicyRequestBodyDataObjectPolicyTypePolicyTypeEnum | string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): CreateRetryPolicyRequestBodyDataObjectPolicyTypePolicyTypeEnum | string | undefined {
        return this['policy_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRetryPolicyRequestBodyDataObjectPolicyTypePolicyTypeEnum {
    USER_NAME = 'User Name',
    SOURCE_IP = 'Source Ip',
    DOMAIN_NAME = 'Domain Name'
}
