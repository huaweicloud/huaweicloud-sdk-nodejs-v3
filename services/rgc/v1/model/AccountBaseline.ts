

export class AccountBaseline {
    private 'account_name'?: string;
    private 'account_id'?: string;
    public phone?: string;
    private 'account_email'?: string;
    private 'account_type'?: AccountBaselineAccountTypeEnum | string;
    public constructor(accountName?: string, accountType?: string) { 
        this['account_name'] = accountName;
        this['account_type'] = accountType;
    }
    public withAccountName(accountName: string): AccountBaseline {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withAccountId(accountId: string): AccountBaseline {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withPhone(phone: string): AccountBaseline {
        this['phone'] = phone;
        return this;
    }
    public withAccountEmail(accountEmail: string): AccountBaseline {
        this['account_email'] = accountEmail;
        return this;
    }
    public set accountEmail(accountEmail: string  | undefined) {
        this['account_email'] = accountEmail;
    }
    public get accountEmail(): string | undefined {
        return this['account_email'];
    }
    public withAccountType(accountType: AccountBaselineAccountTypeEnum | string): AccountBaseline {
        this['account_type'] = accountType;
        return this;
    }
    public set accountType(accountType: AccountBaselineAccountTypeEnum | string  | undefined) {
        this['account_type'] = accountType;
    }
    public get accountType(): AccountBaselineAccountTypeEnum | string | undefined {
        return this['account_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccountBaselineAccountTypeEnum {
    LOGGING = 'LOGGING',
    SECURITY = 'SECURITY'
}
