

export class KeystoneShowSecurityComplianceByOptionRequest {
    private 'domain_id': string | undefined;
    public option: KeystoneShowSecurityComplianceByOptionRequestOptionEnum;
    public constructor(domainId: any, option: any) { 
        this['domain_id'] = domainId;
        this['option'] = option;
    }
    public withDomainId(domainId: string): KeystoneShowSecurityComplianceByOptionRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withOption(option: KeystoneShowSecurityComplianceByOptionRequestOptionEnum): KeystoneShowSecurityComplianceByOptionRequest {
        this['option'] = option;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum KeystoneShowSecurityComplianceByOptionRequestOptionEnum {
    PASSWORD_REGEX = 'password_regex',
    PASSWORD_REGEX_DESCRIPTION = 'password_regex_description'
}
