

export class AccountBaselineRsp {
    private 'account_name'?: string;
    private 'account_id'?: string;
    private 'account_type'?: AccountBaselineRspAccountTypeEnum | string;
    public constructor(accountName?: string, accountType?: string) { 
        this['account_name'] = accountName;
        this['account_type'] = accountType;
    }
    public withAccountName(accountName: string): AccountBaselineRsp {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withAccountId(accountId: string): AccountBaselineRsp {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAccountType(accountType: AccountBaselineRspAccountTypeEnum | string): AccountBaselineRsp {
        this['account_type'] = accountType;
        return this;
    }
    public set accountType(accountType: AccountBaselineRspAccountTypeEnum | string  | undefined) {
        this['account_type'] = accountType;
    }
    public get accountType(): AccountBaselineRspAccountTypeEnum | string | undefined {
        return this['account_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccountBaselineRspAccountTypeEnum {
    LOGGING = 'LOGGING',
    SECURITY = 'SECURITY'
}
