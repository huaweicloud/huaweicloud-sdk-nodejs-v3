

export class ListAppGroupAuthorizationRequest {
    public limit?: number;
    public offset?: number;
    private 'app_group_id'?: string;
    private 'account_id'?: string;
    public account?: string;
    private 'account_type'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListAppGroupAuthorizationRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAppGroupAuthorizationRequest {
        this['offset'] = offset;
        return this;
    }
    public withAppGroupId(appGroupId: string): ListAppGroupAuthorizationRequest {
        this['app_group_id'] = appGroupId;
        return this;
    }
    public set appGroupId(appGroupId: string  | undefined) {
        this['app_group_id'] = appGroupId;
    }
    public get appGroupId(): string | undefined {
        return this['app_group_id'];
    }
    public withAccountId(accountId: string): ListAppGroupAuthorizationRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAccount(account: string): ListAppGroupAuthorizationRequest {
        this['account'] = account;
        return this;
    }
    public withAccountType(accountType: string): ListAppGroupAuthorizationRequest {
        this['account_type'] = accountType;
        return this;
    }
    public set accountType(accountType: string  | undefined) {
        this['account_type'] = accountType;
    }
    public get accountType(): string | undefined {
        return this['account_type'];
    }
}