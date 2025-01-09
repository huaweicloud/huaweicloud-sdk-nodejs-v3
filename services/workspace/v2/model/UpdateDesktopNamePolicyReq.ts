

export class UpdateDesktopNamePolicyReq {
    private 'policy_name'?: string;
    private 'name_prefix'?: string;
    private 'digit_number'?: number;
    private 'start_number'?: number;
    private 'single_domain_user_inc'?: number;
    private 'is_default_policy'?: boolean;
    public constructor() { 
    }
    public withPolicyName(policyName: string): UpdateDesktopNamePolicyReq {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withNamePrefix(namePrefix: string): UpdateDesktopNamePolicyReq {
        this['name_prefix'] = namePrefix;
        return this;
    }
    public set namePrefix(namePrefix: string  | undefined) {
        this['name_prefix'] = namePrefix;
    }
    public get namePrefix(): string | undefined {
        return this['name_prefix'];
    }
    public withDigitNumber(digitNumber: number): UpdateDesktopNamePolicyReq {
        this['digit_number'] = digitNumber;
        return this;
    }
    public set digitNumber(digitNumber: number  | undefined) {
        this['digit_number'] = digitNumber;
    }
    public get digitNumber(): number | undefined {
        return this['digit_number'];
    }
    public withStartNumber(startNumber: number): UpdateDesktopNamePolicyReq {
        this['start_number'] = startNumber;
        return this;
    }
    public set startNumber(startNumber: number  | undefined) {
        this['start_number'] = startNumber;
    }
    public get startNumber(): number | undefined {
        return this['start_number'];
    }
    public withSingleDomainUserInc(singleDomainUserInc: number): UpdateDesktopNamePolicyReq {
        this['single_domain_user_inc'] = singleDomainUserInc;
        return this;
    }
    public set singleDomainUserInc(singleDomainUserInc: number  | undefined) {
        this['single_domain_user_inc'] = singleDomainUserInc;
    }
    public get singleDomainUserInc(): number | undefined {
        return this['single_domain_user_inc'];
    }
    public withIsDefaultPolicy(isDefaultPolicy: boolean): UpdateDesktopNamePolicyReq {
        this['is_default_policy'] = isDefaultPolicy;
        return this;
    }
    public set isDefaultPolicy(isDefaultPolicy: boolean  | undefined) {
        this['is_default_policy'] = isDefaultPolicy;
    }
    public get isDefaultPolicy(): boolean | undefined {
        return this['is_default_policy'];
    }
}