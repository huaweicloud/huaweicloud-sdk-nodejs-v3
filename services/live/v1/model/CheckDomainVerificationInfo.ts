

export class CheckDomainVerificationInfo {
    public domain?: string;
    private 'verify_type'?: CheckDomainVerificationInfoVerifyTypeEnum | string;
    public constructor(domain?: string, verifyType?: string) { 
        this['domain'] = domain;
        this['verify_type'] = verifyType;
    }
    public withDomain(domain: string): CheckDomainVerificationInfo {
        this['domain'] = domain;
        return this;
    }
    public withVerifyType(verifyType: CheckDomainVerificationInfoVerifyTypeEnum | string): CheckDomainVerificationInfo {
        this['verify_type'] = verifyType;
        return this;
    }
    public set verifyType(verifyType: CheckDomainVerificationInfoVerifyTypeEnum | string  | undefined) {
        this['verify_type'] = verifyType;
    }
    public get verifyType(): CheckDomainVerificationInfoVerifyTypeEnum | string | undefined {
        return this['verify_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CheckDomainVerificationInfoVerifyTypeEnum {
    DNS = 'DNS',
    FILE = 'FILE'
}
