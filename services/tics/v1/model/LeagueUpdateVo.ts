

export class LeagueUpdateVo {
    public description?: string;
    private 'dp_enabled'?: boolean;
    private 'privacy_protection_type'?: LeagueUpdateVoPrivacyProtectionTypeEnum | string;
    public constructor() { 
    }
    public withDescription(description: string): LeagueUpdateVo {
        this['description'] = description;
        return this;
    }
    public withDpEnabled(dpEnabled: boolean): LeagueUpdateVo {
        this['dp_enabled'] = dpEnabled;
        return this;
    }
    public set dpEnabled(dpEnabled: boolean  | undefined) {
        this['dp_enabled'] = dpEnabled;
    }
    public get dpEnabled(): boolean | undefined {
        return this['dp_enabled'];
    }
    public withPrivacyProtectionType(privacyProtectionType: LeagueUpdateVoPrivacyProtectionTypeEnum | string): LeagueUpdateVo {
        this['privacy_protection_type'] = privacyProtectionType;
        return this;
    }
    public set privacyProtectionType(privacyProtectionType: LeagueUpdateVoPrivacyProtectionTypeEnum | string  | undefined) {
        this['privacy_protection_type'] = privacyProtectionType;
    }
    public get privacyProtectionType(): LeagueUpdateVoPrivacyProtectionTypeEnum | string | undefined {
        return this['privacy_protection_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LeagueUpdateVoPrivacyProtectionTypeEnum {
    HIGH = 'HIGH',
    STANDARD = 'STANDARD'
}
