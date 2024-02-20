

export class FindingPrincipal {
    public identifier?: string;
    public type?: FindingPrincipalTypeEnum | string;
    public constructor(identifier?: string, type?: string) { 
        this['identifier'] = identifier;
        this['type'] = type;
    }
    public withIdentifier(identifier: string): FindingPrincipal {
        this['identifier'] = identifier;
        return this;
    }
    public withType(type: FindingPrincipalTypeEnum | string): FindingPrincipal {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FindingPrincipalTypeEnum {
    ALL_PRINCIPAL = 'all_principal',
    ACCOUNT = 'account',
    ALL_USER_IN_ACCOUNT = 'all_user_in_account',
    ALL_AGENCY_IN_ACCOUNT = 'all_agency_in_account',
    ALL_IDENTITY_PROVIDER_IN_ACCOUNT = 'all_identity_provider_in_account',
    SPECIFIC_USER = 'specific_user',
    SPECIFIC_AGENCY = 'specific_agency',
    SPECIFIC_GROUP = 'specific_group',
    SPECIFIC_IDENTITY_PROVIDER = 'specific_identity_provider'
}
