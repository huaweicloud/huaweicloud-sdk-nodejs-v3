

export class RemoveAccountRequest {
    private 'X-Security-Token'?: string;
    private 'account_id'?: string;
    public constructor(accountId?: string) { 
        this['account_id'] = accountId;
    }
    public withXSecurityToken(xSecurityToken: string): RemoveAccountRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withAccountId(accountId: string): RemoveAccountRequest {
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