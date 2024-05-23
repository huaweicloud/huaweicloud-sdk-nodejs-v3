

export class CloseAccountRequest {
    private 'account_id'?: string;
    public constructor(accountId?: string) { 
        this['account_id'] = accountId;
    }
    public withAccountId(accountId: string): CloseAccountRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
}