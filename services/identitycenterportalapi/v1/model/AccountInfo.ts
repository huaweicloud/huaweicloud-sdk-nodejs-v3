

export class AccountInfo {
    private 'account_id'?: string;
    private 'account_name'?: string;
    private 'email_address'?: string;
    public constructor() { 
    }
    public withAccountId(accountId: string): AccountInfo {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAccountName(accountName: string): AccountInfo {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withEmailAddress(emailAddress: string): AccountInfo {
        this['email_address'] = emailAddress;
        return this;
    }
    public set emailAddress(emailAddress: string  | undefined) {
        this['email_address'] = emailAddress;
    }
    public get emailAddress(): string | undefined {
        return this['email_address'];
    }
}