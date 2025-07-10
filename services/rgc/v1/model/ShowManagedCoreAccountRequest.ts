

export class ShowManagedCoreAccountRequest {
    private 'account_type'?: ShowManagedCoreAccountRequestAccountTypeEnum | string;
    public constructor(accountType?: string) { 
        this['account_type'] = accountType;
    }
    public withAccountType(accountType: ShowManagedCoreAccountRequestAccountTypeEnum | string): ShowManagedCoreAccountRequest {
        this['account_type'] = accountType;
        return this;
    }
    public set accountType(accountType: ShowManagedCoreAccountRequestAccountTypeEnum | string  | undefined) {
        this['account_type'] = accountType;
    }
    public get accountType(): ShowManagedCoreAccountRequestAccountTypeEnum | string | undefined {
        return this['account_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowManagedCoreAccountRequestAccountTypeEnum {
    LOGGING = 'LOGGING',
    SECURITY = 'SECURITY',
    PRIMARY = 'PRIMARY'
}
